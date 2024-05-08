import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Blog() {
  return (
    <div style={{textAlign: "center",}}
        className="p-5 bg-light">
        
      {/* <Link to='/'>{'<- Back'}</Link> */}
      <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="###">Duke McClellan</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="./Projects">Projects</Nav.Link>
                    <Nav.Link href="/projects">About Me</Nav.Link>
                    <Nav.Link href="./Blog">Blog</Nav.Link>
                    <Nav.Link href="./Contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
      <br />
      <br />
      <img className="img-thumbnail w-100 h-50" src="https://alpha-centauri-production.s3.amazonaws.com/uploads/content/174/header_image/header.jpg"></img>
        <br />
        <br />
      <h1>Bootcamp Blog</h1>
        <br />
        <br />
        <br />

        <h3>Onboarding Week 1</h3>


        <br />

        <h4>Was your first week what you expected? Why? Why not?</h4>

        <p>I think this week was what I would have expected.  I've been able to get an understanding on some of the tools that we will be using through 
        the bootcamp and to meet my peers who will be a part of this process as well.</p>

        <br />

        <h4>What are you excited or eager to learn more about?</h4>

        <p>I'm looking forward to learning more about front end work.  During the pre-work I enjoyed working through some of the assignments that go 
        through the process of building a page where you can actually see things coming together. I'm looking forward to learning more about CSS and styling as well.</p>

        <br />

        <h4>What is something about you that can only be learned by reading this blog?</h4>

        <p>Since I graduated college in 2013 I've worked in multiple jobs in different fields.  Unfortunately in that span of time I never really found what I enjoyed or wanted to do. 
        After getting recommended by several close friends about the bootcamp I decided to apply.  I'm excited to go through this process and to learn a valuable skill that I believe will set me up well for my future career.</p>

        <br />

        <h3>Week 2</h3>
    
        <br />

        <h4>What is something you wish you could do but currently do not have the coding skills to accomplish?</h4>

        <p>I would love to be able to really understand Javascript well.  I know that we are getting ready to start that this week so I'm eager to learn more.  
        It seems pretty complicated right now with how much it can do but I want to learn a lot about that since it's a really important piece with the interactive functions that it provides.</p>

        <br />

        <h4>What are you struggling with?</h4>

        <p>I think right now I'm struggling with the amount of information that's coming at us but I know that we're only just getting started.  
        It also has been difficult trying to balance my current job with bootcamp work.  It feels pretty overwhelming but I know that it's part of the process.</p> 

        <br />

        <h4>How do you solve a problem?</h4>

        <p>I think that so far I've tried to use the rubber duck method that we've been taught.  Verbalizing the problem out loud and thinking through what it is that I want the code to do.  
        I also try to research the problem and figure out what the solution is for it.</p>

        <br />

        <h4>What methods do you use to help yourself get unstuck?</h4>

        <p>If I feel like I'm getting stuck or just spinning my wheels I'll just take a step away from it for a few minutes and not think about it.  
        After a few minutes I'll come back and see if something clicks.  If not, I'll get online and research the issue and the fix for it or I'll reach out to the help channel in slack.</p>

        <br />

        <h3>Week 3</h3>

        <br />

        <h4>What are your thoughts about the roles HTML, CSS, and JavaScript play in the process of rendering content and providing a user experience?</h4>

        <p>It's been really interesting to see each piece of what goes into a page.  The foundational piece being HTML which provides the text and content on the page.  
        CSS is also important which provides the ability to give styling elements that are attracting to the eye.  JavaScript also being an important layer that incorporates functionality.</p>

        <br />

        <h4>What are some objects that your blog incorporates?</h4>

        <p>I don't currently have CSS or JavaScript incorporated in my blog at the moment.  
        I do plan to continue coming back and making changes as we go along that reflect some different concepts that we are learning as we progress through the camp.</p>

        <br />

        <h3>Week 4</h3>

        <br />

        <h4>What was helpful during Onboarding working remotely?</h4>

        <p>Working remotely was helpful for me during onboarding because it allowed me to finish working with my previous company.  
        It was great to be able to have an additional month of having income from my previous job and benefits before heading into the bootcamp for the next few months.</p>

        <br />

        <h4>What hindered your progress during Onboarding?</h4>

        <p>I think one of the difficulties of working remotely during onboarding is that the primary method of learning is by reading a lot of documentation.  
        I'm definitely a visual and auditory learner so it was challenging for me for process all of the information that was coming at me while building the projects that were required.  I'm really looking forward to being able to learn in person this week.</p>

        <br />

        <h4>How did you overcome challenges during Onboarding?</h4>

        <p>With being so new to the world of software development I had to research things often to be able to solve different coding issues.  
        I also would take advantage of the help channel in slack if I really got stuck on a particular problem.  I would do my best to figure it out on my own but would have that available if I really needed it.</p> 

        <br />    

        <h3>Bootcamp Sprint 1</h3>

        <br />

        <h4>What is the number one thing that held you back this week? Why?</h4>

        <p>I think what held me back the most was not asking for help sooner.  
        It's easy to get overwhelmed when the project is assigned but going forward if I'm stuck on something I'm going to reach out for some direction sooner.</p>

        <br />

        <h4>What is one thing you would like to learn more about regarding JavaScript (JSON, Data Structures), Bootstrap, or Atomic Design?</h4>

        <p>I would say data structures in Javascript</p>

        <br />

        <h4>What is your “Why”?</h4>

        <p>I'm not very familiar with them at the moment and I want to continue to expand my understand in Javascript in as many ways as possible.</p> 

        <br />

        <h3>Bootcamp Sprint 2</h3>

        <br />

        <h4>What did you learn about that helped you understand the development process?</h4>

        <p>I think something that has helped me in regards to the development process is the use of wireframes and pseudocoding. 
        When taking the extra time to think about what specific elements my project is going to need I'm able to write better code and limit going back to correct any mistakes or adding things in that were left out.</p>

        <br />

        <h4>What does it mean to develop good code?</h4>

        <p>It has been talked about a lot already in the past couple weeks but I think developing good code starts with good pseudocode.  
        Starting with the logic in what it is that you are trying to build first then translating that into the programming language. 
        I believe it helps limit mistakes, prevents important details from being left out and can prevent you from repeating yourself when writing code.</p>

        <br />

        <h4>What does it mean to be a good developer?</h4>

        <p>I think good developers have several skill sets that make them ideal for the role.  
        They're good researchers and have the ability to find their answer when troubleshooting a problem. 
        I believe a good developer also keeps in mind the end user in how a product will ultimately be utilized and are able to work with others well on a team.</p>

        <br />

        <h4>What is one thing that programmers hate doing?</h4>

        <p>Probably trying to sort through code that hasn't been written well and doesn't have any notes associated with it.</p>

        <br />

        <h3>Bootcamp Sprint 3</h3>

        <br />

        <h4>What is pseudocode and how does it help with programming?</h4>

        <br />

        <p> Pseudocode is a very important part of the programming process.  
        Being new to the world of software development, I've seen how important it is already with the projects that we have been asked to complete. 
        Pseudocode is a detailed outline where we use common logic to help process what we want a program to do.  It doesn't incorporate any programming language and should be written in such a way that anyone reading it should be able to understand. 
        As we have learned so far in the bootcamp, pseudocode serves as a blueprint to a solution to a coding problem. 
        <br />
        <br />
        There are multiple benefits of pseudocode which are beneficial for developers regardless of experience level.  
        When taking the time to pseudocode it forces you to slow down and to consider all of the different elements that are going to be needed for a particular project. 
        This limits the potential for things to be left out and keeps you from fighting with actual code which in turn will help expedite production. 
        Another benefit to pseudocode is that it's easy to write. It's much easier to write out logically want you are wanting to create and what will be needed.  
        That being said, when writing out only logic and your thoughts on a project it will make it easier to communicate with another developer on what you're working on.
        </p>

        <br />

        <h3>Bootcamp Sprint 4</h3>

        <br />

        <h4>Do you think JavaScript Frameworks and Libraries are easy or hard to use? Why?</h4>

        <br />

        <p>I wouldn't say that they're hard to use.  There is a learning curve to using react but I believe
          by improving and getting more proficient with React or another framework/library they can definitely be beneficial.
        </p>

        <br />

        <h4>What Frameworks or Libraries are you interested in learning more about?</h4>
        <br />
        <p>I think with just learning about React this week, I want to continue to learn more and expand my knowledge base around it. 
          I enjoyed using it on the most recent project and I'm looking forward to learning more about it this week! 
        </p>

        <h3>Bootcamp Sprint 5</h3>

        <br />

        <h4>What have you learned about CLI's?  Do you think that they're scary?</h4>
          <br />

        <p>CLI stands for Command Line Interface.  A CLI allows you to execute functions within an operating system. 
          We are going to start going over that this week while learning Python.</p>

          <br />

        <h4>If you were to build a CLI, what would it do?</h4>

        <br />

        <p>With being so new to them I'm not sure exactly how I would build them just yet.
          But I'm looking forward to learning more this week. 
        </p>
        <br />
        
        <h4>List some ideas that without a framework, would take you a long time to code.</h4>
        <br />

        <p></p>

    </div>
  )
}


export default Blog
