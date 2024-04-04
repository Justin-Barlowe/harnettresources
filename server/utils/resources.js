// File to insert data into the MongoDB database

const mongoose = require('mongoose');
const Agency = require('../models/agency'); // Adjust the path as necessary

// MongoDB connection string
const dbconn = 'mongodb+srv://jbarlowe:iT9omxGh08dKz9Mi@discord.ny6wpas.mongodb.net/harnettresources?retryWrites=true&w=majority&appName=discord';

const agencies = [
          {
            "Category": "Education/Training Services",
            "AgencyName": "Harnett County NCWorks Career Center",
            "Address": "1137 E. Cornelius Harnett Blvd. Lillington, NC 27546",
            "Phone": "910-893-2191 or 910-814-4042",
            "Email": "ncworks.0600@nccommerce.com",
            "ServicesOffered": "Education/Training assistance (WIOA Program)",
          },
          {
            "Category": "Education/Training Services",
            "AgencyName": "Triangle South Literacy Works (TSLW)",
            "Address": "600 S. Magnolia Ave. Dunn, NC 28334",
            "Phone": "910-891-4111",
            "Website": "www.website.com",
            "ServicesOffered":
              "Free assistance with computer and literacy skills",
          },
          {
            "Category": "Education/Training Services",
            "AgencyName": "Fayetteville State University (Kervin Hawkins)",
            "Address":
              "1200 Murchison Rd., Helen Chick Bldg. Rm. 224 Fayetteville, NC 28301",
              "Phone": "910-672 -1171",
              "Email": "khawkins@uncfsu.edu",
              "ServicesOffered": "Free assistance completing FAFSA Application",
          },
          {
            "Category": "Education/Training Services",
            "AgencyName": "Central Carolina Community College",
            "Address": "1075 E Cornelius Harnett Blvd, Lillington, NC 27546",
            "Phone": "910-893-9101",
            "Website": "www.cccc.edu",
            "ServicesOffered": "High School & Continuing Education",
          },
          {
            "Category": "Education/Training Services",
            "AgencyName": "Job Corps",
            "Address": "1137 E Cornelius Harnett Blvd, Lillington, NC 27546",
            "Phone": "800-733-5627 | 877-889-5627 TTY",
            "Website": "https://www.jobcorps.gov",
            "ServicesOffered":
              "High School Education, job training, and employment",
          },
          {
            "Category": "Education/Training Services",
            "AgencyName": "Campbell University",
            "Address": "PO Box 567 Buies Creek, NC 27506",
            "Phone": "800-334-4111",
            "Website": "www.campbell.edu",
            "ServicesOffered": "Early childhood education agency",
          },
          {
            "Category": "Clothing",
            "AgencyName": "Dunn Beacon Thrift Store",
            "Address": "102 S Clinton Ave, Dunn, NC 28334",
            "Phone": "910-892-5263",
            "Website": "https://dunn-beaconthrift-store.business.site",
            "ServicesOffered": "Clothing and household items at a reduced price",
          },
          {
            "Category": "Clothing",
            "AgencyName": "Lillington Beacon Thrift Store",
            "Address": "1027 S Main St, Lillington, NC 27546",
            "Phone": "910-814-0604",
            "Website": "https://www.beaconmission.com/",
            "ServicesOffered": "Clothing and household items at a reduced price",
          },
          {
            "Category": "Clothing",
            "AgencyName": "Coats Beacon Thrift Store",
            "Address": "1456 NC-55, Coats, NC 27521",
            "Phone": "910-897-3404",
            "Website": "https://www.beaconmission.com/",
            "ServicesOffered": "Clothing and household items at a reduced price",
          },
          {
            "Category": "Clothing",
            "AgencyName": "Salvation Army (Smithfield & Harnett County)",
            "Address": "306 N. Bright Leaf Blvd Smithfield, NC 27577",
            "Phone": "919-934-9102",
            "Website": "https://www.salvationarmycarolinas.org/smithfield/",
            "ServicesOffered": "Assistance with utility bills, cloths, and food",
          },
          {
            "Category": "Childcare/Youth Services",
            "AgencyName": "Harnett County Child Care Resources",
            "Address": "126 Alexander Dr, Lillington, NC 27546",
            "Phone": "910-893-7597",
            "Website": "http://hcccrr.weebly.com/",
            "ServicesOffered": "Early childhood education agency",
          },
          {
            "Category": "Childcare/Youth Services",
            "AgencyName": "Social Services",
            "Address": "311 W Cornelius Harnett Blvd, Lillington, NC 27546",
            "Phone": "910-893-7500",
            "Website": "https://www.harnett.org/ss/day-care.asp",
            "ServicesOffered":
              "Provides childcare assistance, protective services",
          },
          {
            "Category": "Childcare/Youth Services",
            "AgencyName": "Johnston Lee Harnett Headstart",
            "Address": "645 Shawtown Rd, Lillington, NC 27546",
            "Phone": "910-814-2651",
            "ServicesOffered": "Childcare services",
          },
          {
            "Category": "Employment Services",
            "AgencyName": "Harnett County/Lillington NCWorks Career Center",
            "Address": "1137 E. Cornelius Harnett Blvd. Lillington, NC 27546",
            "Phone": "910-893-2191 or 910-814-4042",
            "Email": "ncworks.0600@nccommerce.com",
            "Website": "https://www.ncworks.gov",
            "ServicesOffered": "Resume and job search assistance"
          },
          {
            "Category": "Employment Services",
            "AgencyName": "Harnett County/Dunn NCWorks Career Center",
            "Address": "214 W. Edgerton St. Dunn, NC 28334",
            "Phone": "910-891-2915",
            "Email": "ncworks.2900@nccommerce.com",
            "Website": "https://www.ncworks.gov",
            "ServicesOffered": "Resume and job search assistance"
          },
          {
            "Category": "Employment Services",
            "AgencyName": "Senior Community Employment Program (SCSEP)",
            "ContactPerson": "Clarice Gilchrist",
            "Address": "1137 E. Cornelius Harnett Blvd. Lillington, NC 27546",
            "Phone": "910-893-2191",
            "Website": "https://www.dol.gov/agencies/eta/seniors",
            "Email": "cgilchrist@myncba.com",
            "ServicesOffered": "Provides employment/training for low-income seniors"
          },
          {
            "Category": "Employment Services",
            "AgencyName": "Fayetteville NCWorks Career Center",
            "ContactPerson": "Michael Westray",
            "Address": "490 N. McPherson Church Rd. Fayetteville, NC 28303",
            "Phone": "910-912-2400 EXT.2296",
            "Email": "michael.westray@nccommerce.com",
            "ServicesOffered": "Help Ex-offenders find jobs"
          },
          {
            "Category": "Food",
            "AgencyName": "Harnett Food Pantry",
            "Address": "413 W Old Rd, Lillington, NC 27546",
            "Phone": "910-985-7787",
            "Website": "https://theharnettfoodpantry.org"
          },
          {
            "Category": "Food",
            "AgencyName": "Harnett County Department of Aging (Meals on Wheels)",
            "Address": "309 West Cornelius Harnett Blvd Lillington, NC 27546",
            "Phone": "910-893-7579",
            "ServicesOffered": "At home meal deliveries"
          },
          {
            "Category": "Financial",
            "AgencyName": "Division of Employment Services (DES)",
            "Address": "700 Wade Ave, Raleigh, NC 27605",
            "Phone": "1-888-737-0259",
            "Email": "des.ui.customerservice@nccommerce.com",
            "Website": "des.nc.gov",
            "ServicesOffered": "Assistance with unemployment insurance benefits."
          },
          {
            "Category": "Financial",
            "AgencyName": "Coats Senior Citizen Center",
            "Address": "214 E Spark St, Coats, NC 27521",
            "Phone": "910-897-4616",
            "Website": "https://www.coatssenior.org",
            "ServicesOffered": "Free tax returns preparation assistance (by appointment) and senior activities."
          },
          {
            "Category": "Financial",
            "AgencyName": "Harnett County Public Library",
            "Address": "601 S Main St, Lillington, NC 27546",
            "Phone": "910-893-3446",
            "Website": "www.harnett.org",
            "ServicesOffered": "Free tax returns preparation assistance, computer usage, book borrowing."
          },
          {
            "Category": "Home Health",
            "AgencyName": "Community Residential Supportive Services Home Health",
            "Address": "102 S Wilson Ave Suite L Dunn, NC 28334",
            "Phone": "910-230-0066",
            "Website": "www.website.com",
            "ServicesOffered": "In home care for the Aging"
          },
          {
            "Category": "Home Health",
            "AgencyName": "Kindred At Home",
            "Address": "87 W Cornelius Harnett BLVD, Lillington, NC 27546",
            "Phone": "910-808-4556",
            "Website": "www.kindredathome.com",
            "ServicesOffered": "In home care for the Aging"
          },
          {
            "Category": "Harnett County Government",
            "AgencyName": "Commissioners",
            "Address": "102 E Front St, Lillington, NC 27546",
            "Phone": "910-893-7555",
            "Email": "commissioners@harnett.org"
          },
          {
            "Category": "Harnett County Government",
            "AgencyName": "Economic Development",
            "Address": "200 Alexander Dr, Lillington, NC 27546",
            "Phone": "910-893-7524",
            "ContactPerson": "Christian Lockamy, Director",
            "Email": "clockamy@harnett.org"
          },
          {
            "Category": "Harnett County Government",
            "AgencyName": "HUD Office",
            "Address": "1000 Carthage St, Sanford, NC 27330",
            "Phone": "910-776-7655"
          },
          {
            "Category": "Harnett County Government",
            "AgencyName": "Information Technology",
            "Address": "201 W Front St, Lillington, NC 27546",
            "Phone": "910-814-6388"
          },
          {
            "Category": "Harnett County Government",
            "AgencyName": "Parks and Recreation",
            "Address": "1100 E McNeill St, Lillington, NC 27546",
            "Phone": "910-893-7518"
          },
          {
            "Category": "Harnett County Government",
            "AgencyName": "Register of Deeds",
            "Address": "305 W Cornelius Harnett Blvd Suite 200 Lillington, NC 27546",
            "Phone": "910-893-7540"
          },
          {
            "Category": "Harnett County Government",
            "AgencyName": "Human Resources and Risk Management",
            "Address": "307 W Cornelius Harnett Blvd, Lillington, NC 27546",
            "Phone": "910-893-7550"
          },
          {
            "Category": "Harnett County Government",
            "AgencyName": "Sheriff’s Office",
            "Address": "175 Bain St, Lillington, NC 27546",
            "Phone": "910-893-9111"
          },
          {
            "Category": "Harnett County Government",
            "AgencyName": "Soil and Water Conversation District",
            "Address": "126 Alexander Dr, Suite 200, Lillington, NC 27546",
            "Phone": "910-893-7584"
          },
          {
            "Category": "Support Groups",
            "AgencyName": "Harnett County Department of Aging",
            "Address": "309 W Cornelius Harnett Blvd, Lillington, NC 27546",
            "Phone": "910-814-6075",
            "ContactPerson": "Program Coordinator: Latorius Adams",
            "Email": "lsadams@harnett.org",
            "ServicesOffered": "Counseling Services",
            "Brochure": "http://www.harnett.org/aging/downloads/2016.%20GRasP%20Brochure.pdf"
          },
          {
            "Category": "Support Groups",
            "AgencyName": "Partnership for Children",
            "Address": "170 Pine State St, Lillington, NC 27546",
            "Phone": "910-893-2344",
            "Website": "https://harnettsmartstart.org"
          },
          {
            "Category": "Support Groups",
            "AgencyName": "Harnett County Parents as Teachers",
            "Address": "126 Alexander Dr. Lillington, NC 27546",
            "Phone": "910-814-6050",
            "Email": "harnettcountypatnc@gmail.com",
            "InformationVideo": "https://www.youtube.com/watch?v=7oIc31H04wc"
          },
          {
            "Category": "Support Groups",
            "AgencyName": "Sexual Assault Family Emergencies (S.A.F.E.)",
            "Address": "1210 South Main St., Lillington, NC 27546",
            "Phone": "910-893-7233",
            "ServicesOffered": "Service for sexual assault and domestic violence victims"
          },
          {
            "Category": "Transportation",
            "AgencyName": "HARTS Harnett County Transportation",
            "Address": "250 Alexander Dr, Lillington, NC, 27546",
            "Phone": "910-814-4019",
            "Website": "https://www.harnett.org/harts",
            "Brochure": "https://www.harnett.org/harts/downloads/HARTS%20BROCHURE%202016.pdf"
          },
          {
            "Category": "Medical Care",
            "AgencyName": "Harnett County Department of Health",
            "Address": "307 W Cornelius Harnett Blvd, Lillington, NC",
            "Phone": "910-893-7550"
          },
          {
            "Category": "Medical Care",
            "AgencyName": "First Choice Community Lillington Health Center",
            "Address": "40 Autumn Fern Trail, Lillington, NC 27546",
            "Phone": "910-364-0970",
            "Website": "www.firstchoicehc.org"
          },
          {
            "Category": "Mental Health",
            "AgencyName": "Daymark Recovery Services",
            "Address": "5841 US Highway 421 South, Lillington, NC 27546",
            "Phone": "910-893-5727",
            "Website": "https://www.daymarkrecovery.org"
          },
          {
            "Category": "Mental Health",
            "AgencyName": "Harnett Counseling Services",
            "Address": "1186 N Main St, Lillington, NC 27546",
            "Phone": "910-814-0909",
            "Website": "http://www.harnettcounseling.com"
          },
          {
            "Category": "Miscellaneous",
            "AgencyName": "Johnston-Lee Community Action, Inc",
            "Address": "745 Shawtown Rd Suite A, Lillington, NC 27546",
            "Phone": "910-814-8360",
            "Website": "https://www.jlhcommunityaction.org",
            "ServicesOffered": "Case management, crisis intervention, etc."
          },
          {
            "Category": "Re-entry Employment Services",
            "AgencyName": "NCWorks Career Center (Michael Westray)",
            "Address": "490 N. McPherson Church Rd. Fayetteville, NC 28303",
            "Phone": "910-912-2400 EXT.2296",
            "Email": "michael.westray@nccommerce.com",
            "ServicesOffered": "Help Ex-offenders find jobs"
          },
          {
            "Category": "Rent/Utility/Housing",
            "AgencyName": "Dunn Housing Authority",
            "Address": "817 Stewart St, Dunn, NC 28334",
            "Phone": "910-892-5076",
            "Website": "www.dunnhousing.com"
          },
          {
            "Category": "Rent/Utility/Housing",
            "AgencyName": "Erwin Elderly Housing",
            "Address": "201 E L St, Erwin, NC 27339",
            "Phone": "910-897-4291"
          }
        ];

mongoose.connect(dbconn)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB', err));

// Save data to MongoDB
const insertData = async () => {
  try {
    await Agency.insertMany(agencies); // Using insertMany for bulk insertion
    console.log('Data has been successfully inserted!');
  } catch (err) {
    console.error('Error inserting data into the database:', err);
  } finally {
    await mongoose.connection.close();
  }
};

insertData();
