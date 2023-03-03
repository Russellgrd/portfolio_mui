import { Button, Box, Typography, styled, keyframes } from "@mui/material";
import { maxWidth } from "@mui/system";
import { useEffect } from "react";
import cv from '../assets/cv.docx';
import { textShadowPopTop } from '../helpers/transitions';

const MyTypographyParagraph = styled(Typography)(
    {
    color: "white",
    fontWeight:'bold',
    marginBottom:5,
    display:'flex',
    alignItems:'center',
    maxWidth:'75ch'
    }
  );

const MyBullet = styled(Box)({
    minHeight:'10px',
    minWidth:'10px',
    display:'inline-block',
    marginRight:'10px',
    backgroundColor:'red'
})

const MyTypographySubHeading = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightBold,
    letterSpacing:'2px',
    marginBottom:5
  }));

const Resume = () => {


    return(
        <Box sx={{display:'flex', flexDirection:'column'}}>
            <Typography variant='h3' sx={{fontWeight:'bold', color:'common.white', textAlign:'center', animation:`${textShadowPopTop} .5s ease forwards`}}>
                RESUME.
            </Typography>
            <MyTypographySubHeading variant="h5">Objective</MyTypographySubHeading>
            <MyTypographyParagraph>
                <MyBullet></MyBullet>
                To obtain a full time job as a Javascript Web Developer where I can utilize my programming skills in either Nodejs Server Side Web development or as a Front-End Client Side Web Developer.
            </MyTypographyParagraph>
            <MyTypographySubHeading variant="h5">Skills</MyTypographySubHeading>
            <MyTypographyParagraph>
            <MyBullet></MyBullet>
                Very confident in implementing Javascript projects in a web or server environment and I understand all the core fundamentals of the Javascript run time environment, call stack, call back queue, synchronous, asynchronous, promises and closure
            </MyTypographyParagraph>
            <MyTypographyParagraph>
                <MyBullet></MyBullet>
                I have built and established a great foundation utilizing the core Nodejs modules as well as some very important 3rd party modules using npm such as Express.js.
            </MyTypographyParagraph>
            <MyTypographyParagraph>
                <MyBullet></MyBullet>
                React library as well as plain vanilla Javascript
            </MyTypographyParagraph>
            <MyTypographyParagraph>
                <MyBullet></MyBullet>
                Hands on experience using git version control and working well within a team
            </MyTypographyParagraph>
            <MyTypographyParagraph>
                <MyBullet></MyBullet>
                Very dedicated to work projects and always looking to develop my skills and learn as Javascript changes, evolves and implements additions to the language
            </MyTypographyParagraph>
            <MyTypographyParagraph>
                <MyBullet></MyBullet>
                I can work with all kinds of data structures such as arrays, objects, lists, maps and sets
            </MyTypographyParagraph>
            <MyTypographyParagraph>
                <MyBullet></MyBullet>
                I can work with strings and use regular expressions in order to manipulate and query data
            </MyTypographyParagraph>
            <MyTypographyParagraph>
                <MyBullet></MyBullet>
                I am very confident in debugging applications, working in the browser developer tools or in Visual Studio Code with Nodejs by adding breakpoints and stepping through the code in the execution thread line by line and reviewing execution contexts, scopes and closure.
            </MyTypographyParagraph>
            <MyTypographyParagraph>
                <MyBullet></MyBullet>
                I understand how the event loop works, callbacks and event listeners
            </MyTypographyParagraph>
            <MyTypographyParagraph>
                <MyBullet></MyBullet>
                Well versed with the Document Object Model and manipulating data with Javascript
            </MyTypographyParagraph>
            <MyTypographyParagraph>
                <MyBullet></MyBullet>
                I have worked with databases such as SQL and MongoDB and understand how to ensure safely accessing and storing data using encryption
            </MyTypographyParagraph>
            <MyTypographySubHeading variant="h5">Experience</MyTypographySubHeading>
            <MyTypographyParagraph>
                <MyBullet></MyBullet>
                Freelance Javascript Web Developer Jan 2019 to current
            </MyTypographyParagraph>
            <MyTypographyParagraph>
                <MyBullet></MyBullet>
                Whilst working in a totally different career, I have been programming and building projects during evenings and weekends
            </MyTypographyParagraph>
            <MyTypographyParagraph>
                <MyBullet></MyBullet>
                I have built a number of websites for private clients as well as personal projects
            </MyTypographyParagraph>
            <MyTypographyParagraph>
                <MyBullet></MyBullet>
                I have built projects from the ground up using the MVC approach in Nodejs
            </MyTypographyParagraph>
            <MyTypographyParagraph>
                <MyBullet></MyBullet>
                I have built projects using React Library and understand how to use React hooks, routing and components
            </MyTypographyParagraph>
            <MyTypographyParagraph>
                <MyBullet></MyBullet>
                I have built projects using the http module in Nodejs along with other core modules such as the fs module to handle file reading and writing using promises as well as handling read and write streams to ensure faster delivery to clients
            </MyTypographyParagraph>
            <MyTypographyParagraph>
                <MyBullet></MyBullet>
                I have built projects with database connections to handle saving data and reading data to and from the databases using SQL or MongoDB command line instru
            </MyTypographyParagraph>
            <MyTypographyParagraph>
                <MyBullet></MyBullet>
                Constantly learning and developing skills
            </MyTypographyParagraph>
            <MyTypographyParagraph>
                <MyBullet></MyBullet>
                Really looking for an opportunity to move into a full time programming role in order to gain commercial experience and establish my career as a Javascript programmer
            </MyTypographyParagraph>
            <MyTypographyParagraph>
                <MyBullet></MyBullet>
                Payroll Team Leader – Synnovis LLP, London Bridge: Aug 2019 to current
            </MyTypographyParagraph>
            <MyTypographyParagraph>
                <MyBullet></MyBullet>
                Processing monthly and weekly payroll for a Pathology company with 1800 clinical staff from start to finish.
            </MyTypographyParagraph>
            <MyTypographyParagraph>
                <MyBullet></MyBullet>
                Finance assistant,Payroll Team Leader – Next Ventures, London: Nov 2011 to Aug 2019 
            </MyTypographyParagraph>
            <MyTypographyParagraph>
                <MyBullet></MyBullet>
                Processing all contractor payroll for an IT recruitment business, looking after ledgers, credit control and 3rd party payments and costings
            </MyTypographyParagraph>
            <MyTypographyParagraph>
                <MyBullet></MyBullet>
                Payroll Administrator – Interquest, London: Jan 2009 to Nov 2011
            </MyTypographyParagraph>
            <MyTypographyParagraph>
                <MyBullet></MyBullet>
                Supporting accounts as well as paying all contractors invoices, looking after ledgers and contractor support for any unpaid invoices or payment queries
            </MyTypographyParagraph>
            <MyTypographyParagraph>
                <MyBullet></MyBullet>
                Payroll Administrator – Prospero Teaching - London: Jan 2008 to Jan 2009
            </MyTypographyParagraph>
            <MyTypographyParagraph>
                <MyBullet></MyBullet>
                Supported accounts team in paying teachers across london for all timesheets, telephone and email support for all teachers with payment queries and credit control
            </MyTypographyParagraph>
            <MyTypographyParagraph>
                <MyBullet></MyBullet>
                Recovery Advisor – BMW - Hook: May 2006 to Dec 2007
            </MyTypographyParagraph>
            <MyTypographyParagraph>
                <MyBullet></MyBullet>
                Worked within the recovery team arranging recovery of BMW financed agreements that had fallen into debt.  Handling all telephone queries, emails as well as logging all calls and letter correspondence to the database
            </MyTypographyParagraph>
            <MyTypographyParagraph>
                <MyBullet></MyBullet>
                Company Buyer – Midrand South Africa: Jan 2004 to Jan 2006
            </MyTypographyParagraph>
            <MyTypographyParagraph>
                <MyBullet></MyBullet>
                Motorcycle company important 200 wrecked motor-cycles each month and it was my responsibility to order spare parts, tires and any needed equipment for the workshop to restore the motorbikes back to a good condition in order to sell to the public.
            </MyTypographyParagraph>
            
            <MyTypographySubHeading variant="h5">Education</MyTypographySubHeading>
            <MyTypographyParagraph>
                <MyBullet></MyBullet>
                Matric Certification South Africa: December 2003
            </MyTypographyParagraph>
            <MyTypographySubHeading variant="h5">Final Comments</MyTypographySubHeading>
            <MyTypographyParagraph>
                <MyBullet></MyBullet>
                I am very keen to be given an opportunity to work as a full time Javascript Web Developer.  I am very dedicated and have a strong Javascript fundamental tool set in order to land running and will continue to learn and grow in order to provide quality code to the organization I work for.  I have a huge passion for web development and watching how Javascript evolves and becomes better each year.  I am fascinated by computers and currently am using an Ubuntu linux distro as I very much enjoy the freedom given and the efficiently of the linux terminal. I also have a raspberry pi and run a bitcoin node as I have an interest in crypto currency and am intrigued by the security and protocol behind the network.  I would be on a 1 month notice period and look forward to working with you.  Thank you for your time. Russell.
            </MyTypographyParagraph>







 
        </Box>
    )

}

export default Resume;