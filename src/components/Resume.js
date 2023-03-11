import { Button, Box, Typography, styled, keyframes } from "@mui/material";
import { focusInExpand } from '../helpers/transitions';

const MyTypographyParagraph = styled(Typography)(
    {
    color: "#fbe094",
    fontWeight:'bold',
    marginBottom:5,
    display:'flex',
    alignItems:'center',
    marginBottom:'3rem'
    }
  );


const MyTypographySubHeading = styled(Typography)(({ theme }) => ({
    color: '#fbe094',
    letterSpacing:'2px',
    marginTop:50,
    marginBottom:5
  }));

const Resume = () => {


    return(
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', width:'100vw'}}>
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', width:'60%'}}>
                <Typography variant='h3' sx={{fontWeight:'bold', color:'#fbe094', textAlign:'center', animation:`${focusInExpand} 1s ease forwards`}}>
                    RESUME.
                </Typography>
                <MyTypographySubHeading variant="h5" >Objective</MyTypographySubHeading>
                <MyTypographyParagraph>

                    To obtain a full time job as a Javascript Web Developer where I can utilize my programming skills in either Nodejs Server Side Web development or as a Front-End Client Side Web Developer.
                </MyTypographyParagraph>
                <MyTypographySubHeading variant="h5">Skills</MyTypographySubHeading>
                <MyTypographyParagraph>
                    Very confident in implementing Javascript projects in server or client side.  I understand all the core fundamentals of the Javascript run time environment, call stack, call back queue, synchronous, asynchronous, promises and closure.
                </MyTypographyParagraph>
                <MyTypographyParagraph>
                    I have built and established a great foundation utilizing the core Nodejs modules as well as some very important 3rd party modules such as Express.js.
                </MyTypographyParagraph>
                <MyTypographyParagraph>

                    Experienced using React library or plain vanilla Javascript.
                </MyTypographyParagraph>
                <MyTypographyParagraph>
                    Hands on experience using NPM packages, git version control and working well within a team.
                </MyTypographyParagraph>
                <MyTypographyParagraph>

                    Very dedicated to work projects and always looking to develop my skills and learn as Javascript changes and evolves.
                </MyTypographyParagraph>
                <MyTypographyParagraph>

                    I can work with all kinds of data structures such as arrays, objects, lists, maps and sets.
                </MyTypographyParagraph>
                <MyTypographyParagraph>
    
                    I can work with strings and use regular expressions in order to manipulate and query data.
                </MyTypographyParagraph>
                <MyTypographyParagraph>

                    I am very confident in debugging applications, working in the browser developer tools or in Visual Studio Code with Nodejs by adding breakpoints and stepping through the code in the execution thread line by line and reviewing execution contexts, scopes and closure.
                </MyTypographyParagraph>
                <MyTypographyParagraph>

                    I understand how the event loop works, callbacks and event listeners.
                </MyTypographyParagraph>
                <MyTypographyParagraph>

                    Well versed with the Document Object Model and manipulating data with Javascript.
                </MyTypographyParagraph>
                <MyTypographyParagraph>
        
                    I have worked with databases such as SQL and MongoDB and understand how to ensure safely accessing and storing data using encryption.
                </MyTypographyParagraph>
                <MyTypographySubHeading variant="h5">Experience</MyTypographySubHeading>
                <MyTypographyParagraph  variant="h6" sx={{color:'#f6ac9f'}}>
                    Freelance Javascript Web Developer Jan 2019 to current.
                </MyTypographyParagraph>
                <MyTypographyParagraph>

                    Whilst working in a totally different career, I have been programming and building projects during evenings and weekends.
                </MyTypographyParagraph>
                <MyTypographyParagraph>

                    I have built a number of websites for private clients as well as personal projects.
                </MyTypographyParagraph>
                <MyTypographyParagraph>
                
                    I have built projects from the ground up using the MVC approach in Nodejs.
                </MyTypographyParagraph>
                <MyTypographyParagraph>

                    I have built projects using React Library and understand how to use React hooks, routing and components.
                </MyTypographyParagraph>
                <MyTypographyParagraph>

                    I have built projects using the http module in Nodejs along with other core modules such as the fs module to handle file reading and writing using promises as well as handling read and write streams to ensure faster delivery to clients.
                </MyTypographyParagraph>
                <MyTypographyParagraph>

                    I have built projects with database connections to handle saving data and reading data to and from the databases using SQL or MongoDB command line instructions.
                </MyTypographyParagraph>
                <MyTypographyParagraph>
                    Constantly learning and developing skills.
                </MyTypographyParagraph>
                <MyTypographyParagraph>

                    Really looking for an opportunity to move into a full time programming role in order to gain commercial experience and establish my career as a Javascript programmer.
                </MyTypographyParagraph>
                <MyTypographyParagraph variant="h6" sx={{color:'#f6ac9f'}}>
                    Payroll Team Leader – Synnovis LLP, London Bridge: Aug 2019 to current.
                </MyTypographyParagraph>
                <MyTypographyParagraph>
                    Processing monthly and weekly payroll for a Pathology company with 1800 clinical staff from start to finish.
                </MyTypographyParagraph>
                <MyTypographyParagraph  variant="h6" sx={{color:'#f6ac9f'}}>
                    Finance assistant,Payroll Team Leader – Next Ventures, London: Nov 2011 to Aug 2019.
                </MyTypographyParagraph>
                <MyTypographyParagraph>
                    Processing all contractor payroll for an IT recruitment business, looking after ledgers, credit control and 3rd party payments and costings.
                </MyTypographyParagraph>
                <MyTypographyParagraph  variant="h6" sx={{color:'#f6ac9f'}}>
                    Payroll Administrator – Interquest, London: Jan 2009 to Nov 2011.
                </MyTypographyParagraph>
                <MyTypographyParagraph>
                    Supporting accounts as well as paying all contractors invoices, looking after ledgers and contractor support for any unpaid invoices or payment queries.
                </MyTypographyParagraph>
                <MyTypographyParagraph  variant="h6" sx={{color:'#f6ac9f'}}>
                    Payroll Administrator – Prospero Teaching - London: Jan 2008 to Jan 2009.
                </MyTypographyParagraph>
                <MyTypographyParagraph>
                    Supported accounts team in paying teachers across London for all timesheets, telephone and email support for all teachers with payment queries and credit control.
                </MyTypographyParagraph>
                <MyTypographyParagraph  variant="h6" sx={{color:'#f6ac9f'}}>
                    Recovery Advisor – BMW - Hook: May 2006 to Dec 2007.
                </MyTypographyParagraph>
                <MyTypographyParagraph>

                    Worked within the recovery team arranging recovery of BMW financed agreements that had fallen into debt.  Handling all telephone queries, emails as well as logging all calls and letter correspondence to the database.
                </MyTypographyParagraph>
                <MyTypographyParagraph  variant="h6" sx={{color:'#f6ac9f'}}>
                    Company Buyer – Midrand South Africa: Jan 2004 to Jan 2006.
                </MyTypographyParagraph>
                <MyTypographyParagraph>
                    Motorcycle company imported 200 wrecked motor-cycles each month and it was my responsibility to order spare parts, tyres and any needed equipment for the workshop to restore the motorbikes back to a good condition in order to sell to resell.
                </MyTypographyParagraph>
                
                <MyTypographySubHeading variant="h5">Education</MyTypographySubHeading>
                <MyTypographyParagraph>
                    Matric Certification South Africa: December 2003.
                </MyTypographyParagraph>
                <MyTypographySubHeading variant="h5">Final Comments</MyTypographySubHeading>
                <MyTypographyParagraph>
                    I am very keen to be given an opportunity to work as a full time Javascript Web Developer.  I am very dedicated and have a strong Javascript fundamental tool set in order to land running and will continue to learn and grow in order to provide quality code to the organization I work for. 
                </MyTypographyParagraph>







    
            </Box>
        </Box>
    )

}

export default Resume;