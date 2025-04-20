import React, { useState } from "react";
import prateek from "../assets/prateek.jpg";
import mantech from "../assets/mantech.jpeg";

export default function Coop() {
  const [selectedTerm, setSelectedTerm] = useState("summer 2023");
  const [activeSection, setActiveSection] = useState("intro");

  const contentMap = {
    "summer 2023": {
      intro: (
        <div className="prose prose-neutral max-w-none leading-relaxed">
          <p className="">
            For my Summer 2023 work term, I worked as a Research Assistant at
            the University of Guelph. This experience marked my first journey
            toward Data Science/Machine Learning. <br />
            <br />
            You see, the challenges that educators face when analyzing large
            volumes of student feedback are quite real. When a course concludes,
            students get a chance to submit their feedback. The student feedback
            is like a goldmine of information, but the manual process of
            instructors sifting through and categorizing them can be both
            time-consuming and labor intensive, especially when we are talking
            of classes with 300-400 students. My work was to overcome these
            challenges by automating the process of categorization of student
            feedback. <br /> <br />
            As you read further, you'll gain insights into the project that I
            undertook, the methodologies employed, and the outcomes achieved.
            Moreover, I will reflect on the personal goals that I achieved
            throughout the work term.
          </p>
          <br />
          <img src={prateek} alt="Prateek" className="object-cover shadow-lg" />
        </div>
      ),
      aboutEmp: (
        <div className="grid grid-cols-1">
          <div className="prose prose-neutral max-w-none leading-relaxed space-y-6">
            <div>
              <h3 className="font-sans font-medium mb-4">
                University of Guelph
              </h3>
              <p className="">
                The University of Guelph (U of G) is a comprehensive public
                research university in Guelph, Ontario, Canada. It was
                established in 1964 after the amalgamation of Ontario
                Agricultural College, the MacDonald Institute, and the Ontario
                Veterinary College, and has since grown to an institution of
                more than 32,000 students (including those at the Humber campus,
                off-campus degree enrolments, diploma enrolments and part-time
                students) and over 1,500 faculty (academic staff) as of fall
                2015. It offers 94 undergraduate degrees, 48 graduate programs,
                and 6 associate degrees in many different disciplines.
              </p>
            </div>

            <div>
              <h3 className="font-medium font-sans mb-4">
                Dr. Ritu Chaturvedi
              </h3>
              <p className="">
                I worked under the faculty of College of Engineering and
                Physical Science (CEPS), Computer Science department, under the
                supervision of Dr. Ritu Chaturvedi. Dr. Ritu Chaturvedi received
                her PhD from the University of Windsor. Between 2016 and 2017,
                she held a position as an Assistant Professor (Teaching Stream)
                at the University of Toronto, Mississauga. Chaturvedi joined the
                School of Computer Science at the University of Guelph in 2017
                where she is now an Assistant Professor. Her research is focused
                broadly on data mining and predictive modeling, particularly
                educational data mining that caters to web-based tutoring
                systems such as Intelligent Tutoring Systems. Much of her work
                focuses on topics in teaching and learning.
              </p>
            </div>
          </div>
        </div>
      ),
      jobDes: (
        <div className="prose prose-neutral max-w-none leading-relaxed">
          <p className="leading-relaxed">
            My role as a Research Assistant was to automate feedback coding that
            employed text mining methods, specifically topic modelling and
            unsupervised clustering. Since this was my first exposure in
            deploying machine learning algorithm, I learned a lot. Despite the
            availability of pre-existing libraries for different ML algorithms,
            I took the initiative to code them from scratch, going above and
            beyond to gain a deep understanding of the underlying concepts.
            Prior to delving into the coding part, I read few past research
            papers to familiarize myself with the existing knowledge and work
            done in this field. This step was essential to to acquaint myself
            with the methodologies that had previously been used.
          </p>
          <br />
          <p className="leading-relaxed">
            In the context of our research, our approach involved categorizing
            feedback into different topics using techniques such as
            preprocessing, Bag of Words (BoW), Term Frequency-Inverse Document
            Frequency (TF-IDF), k-means clustering, and Latent Dirichlet
            Allocation (LDA). The results of our work revealed five informative
            topics: Student Experience, Learning Challenges, Course Engagement,
            Course Evaluation, and Assessments and Grades. This would empower
            instructors to make informed decisions to better meet the
            requirements of their students. <br /> <br />
            Overall, our research added to the ongoing efforts to automate and
            improve the analysis of student feedback, aiming to provide a more
            efficient and effective way for educational enhancement.
          </p>
        </div>
      ),
      learnGoals: (
        <div className="sprose prose-neutral max-w-none leading-relaxed pace-y-8">
          <div>
            <h3 className="font-sans leading-relaxed font-medium mb-3">
              1. Learn about ML concepts
            </h3>
            <p className="">
              Throughout my co-op work term, I delved into diverse machine
              learning algorithms as part of the coursework I undertook. These
              include feature extraction methods such as bag-of-words and
              TF-IDF, along with both supervised and unsupervised algorithms
              like k-nearest neighbours and k-means clustering. Despite there
              being numerous ML libraries that provide these algorithms, I tried
              and implemented the code for them myself. This approach helped me
              to get a better understanding of their underlying mechanisms.
              While I got to know about these algorithms, I believe my journey
              to ML is ongoing, as there are still various other algorithms I’ve
              yet to explore.
            </p>
          </div>
          <br />
          <div>
            <h3 className="font-medium leading-relaxed font-sans mb-3">
              2. Learn how to think differently
            </h3>
            <p className="">
              After going through the past research papers, I got to know a
              general idea of what has been done to extract valuable insights
              from student feedback. This helped me to grasp the methodologies
              that had been employed in this field. The process of feature
              extraction emerged out to be the most time-consuming phase. This
              was due to the various experiments that we conducted in selecting
              the most relevant features. This was crucial so as to capture the
              meaningful essence of the student feedback. I came up with my own
              approaches on how to extract meaningful features from the data,
              given the high dimensionality. While not all of them were deemed
              suitable, they encouraged me to think creatively.
            </p>
          </div>
          <br />
          <div>
            <h3 className="font-medium leading-relaxed font-sans mb-3">
              3. Learn how to write academic papers
            </h3>
            <p className="">
              My goal was to enhance my academic writing skills, specifically in
              writing clear and concise research papers. I wanted to learn how
              to write a succinct abstract, as well as a concise introduction
              that would offer the reader a clear overview of the entire paper.
              I also wanted to effectively present the methods employed and
              adhere to proper source citation. Although my abstract,
              introduction and methodology section marked improvement, I’m still
              in the process of completing the writing. I believe I have made
              substantial progress in enhancing my communication skills,
              ensuring that my ideas are conveyed with clarity.
            </p>
          </div>
        </div>
      ),
      conc: (
        <div className="flex flex-col items-center space-y-8">
          <p className="leading-relaxed max-w-2xl">
            Throughout the duration of my work experience, I acquired invaluable
            insights into the practical applications of machine learning
            concepts.
            <br />I extend my sincere gratitude to Dr. Ritu Chaturvedi for her
            unwavering support and guidance at every step of this journey,
            especially considering it was my first exposure to machine learning.
            I am eager to dive further in this field, with the aspiration of
            leveraging these skills to help solve real-world problems and make
            meaningful contributions.
          </p>
        </div>
      ),
    },
    "winter 2024 & summer 2024": {
      intro: (
        <div className="prose prose-neutral max-w-none leading-relaxed">
          <p className="leading-relaxed">
            For my Winter 2024 and Summer 2024 work terms, I worked as a
            Software Developer at MANTECH Inc. This work term report provides
            insights into my role as a Software developer where I continue to
            contribute to MANTECH's new project. I've spent the last eight
            months immersed in learning new software design principles like MVVM
            and gaining proficiency in .NET, C#, and WPF technologies. Despite
            being new to C#, I've been able to learn and adapt, expanding on the
            fundamental understanding of OOP that I gained from my academic
            courses.
          </p>
          <br />
          <h3 className="font-medium mb-4">TL;DR - What I Did</h3>

          <ul className="list-disc pl-5">
            <li>
              Reverse-engineered legacy code from MANTECH Pro and DLLs to
              understand hardware behavior.
            </li>
            <li>
              Integrated real-world lab devices (MiniHub, Turbidity Meter, DO
              Meter) with the new BOD Pro UI.
            </li>
            <li>
              Built core screens (e.g., Single-Run Setup) using WPF, MVVM, and
              custom controls.
            </li>
            <li>
              Refactored legacy modules into modular, testable MVVM components.
            </li>
          </ul>

          <br />
          <h3 className="font-medium mb-4">TL;DR - What I Learned</h3>
          <ul className="list-disc pl-5">
            <li>
              Reading and working with unfamiliar, undocumented legacy code.
            </li>
            <li>Connecting compiled DLLs to new front-end components.</li>
            <li>
              Designing data-driven UI with strong architectural principles.
            </li>
            <li>
              Communicating effectively with cross-functional teams (QA +
              hardware).
            </li>
          </ul>
        </div>
      ),
      aboutEmp: (
        <div className="">
          <div className="prose prose-neutral max-w-none leading-relaxed space-y-6">
            <div>
              <h3 className="font-medium mb-4">MANTECH Inc.</h3>
              <p className="">
                Based in Guelph, ON., Canada, and its subsidiary in Fort Myers
                Beach, FL, USA, MANTECH manufactures innovative water quality
                analysis systems that help industrial facilities, laboratories
                and utilities deliver clean, safe water and protect the
                environment. MANTECH’s laboratory, online and portable systems
                are easy to use and deliver fast, accurate results reducing
                and/or eliminating the use of harmful chemicals, providing
                sustainable water quality solutions that are trusted in more
                than 52 countries. MANTECH systems analyze thousands of samples
                every day in environmental and soil laboratories, industrial and
                municipal wastewater facilities, pulp and paper mills, food and
                beverage manufacturing plants, laboratories and municipal
                drinking water treatment plants. <br />
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-4">Their Mission Statement</h3>
              <p className="">
                MANTECH manufactures analyzers for water and soil testing. Our
                mission is to generate the highest quality results, in the
                shortest amount of time, with green methods, using simple and
                smart analyzers. As a result, our customers will have
                significant positive economic and sustainable impacts on their
                businesses and communities.
              </p>
            </div>
          </div>
          <br />

          <div className="flex items-center justify-center">
            <img
              src={mantech}
              alt="Company"
              className="max-w-full h-auto rounded-md shadow-lg"
            />
          </div>
        </div>
      ),
      jobDes: (
        <div className="prose prose-neutral max-w-none leading-relaxed">
          <p className="leading-relaxed">
            During my 8-month co-op at MANTECH, I worked on the development of
            <b> BOD Pro,</b> a modern replacement for the legacy
            <b> MANTECH Pro </b>
            system. The goal was to refactor and rebuild the application using
            <b> .NET, C#, and WPF </b>, following the{" "}
            <b> MVVM (Model-View-ViewModel) </b>
            architecture and <b> dependency injection </b> for better modularity
            and testability.
          </p>
          <br />
          <p>
            A major part of my role involved working with{" "}
            <b> existing code from MANTECH Pro</b>, including reading and
            analyzing large codebases and compiled <b> DLL libraries</b>. I had
            to reverse-engineer workflows and understand how core hardware
            functionality was implemented in the old system before
            re-integrating that logic into the new application. While the
            lower-level communication libraries were already in place, I was
            responsible for <b> connecting them to the UI</b>, ensuring
            real-time data flow from devices like the{" "}
            <b> MiniHub, Turbidity Meter</b>, and <b> DO Meter</b>.
          </p>
          <br />

          <p>
            This involved wiring up digital/analog inputs, electrode readings,
            stirrer control, and level-sense monitoring, and building UI logic
            that responded correctly to hardware events. I also designed a
            <b> device disconnect/reset workflow </b> that ensured stability
            without requiring physical disconnection, improving on older
            approaches.
          </p>
          <br />

          <p>
            In addition to hardware integration, I developed front-end
            components like the <b> Single-Run Setup </b> and{" "}
            <b> Edit Columns screens</b>, featuring <b> CSV import/export</b>,
            dynamic column layouts, and user-configurable options. These were
            built using <b> custom WPF controls </b> and advanced data binding
            techniques to make the UI flexible and maintainable.
          </p>
          <br />

          <p>
            I worked closely with the QA and hardware teams, participated in
            code reviews, and helped refactor legacy screens from code-behind
            into clean MVVM patterns — making the application easier to test and
            scale.
          </p>
          <br />

          <p>
            This experience gave me strong hands-on exposure to enterprise
            software development, particularly in understanding legacy code,
            integrating hardware systems, and delivering maintainable solutions
            in a real-world environment.
          </p>
        </div>
      ),
      learnGoals: (
        <div className="prose prose-neutral max-w-none leading-relaxed space-y-8">
          <div>
            <h3 className="font-medium mb-3">
              1. Develop a comprehensive understanding of WPF and deepen my
              knowledge of C#
            </h3>
            <p className="">
              Over the course of my 8-month co-op term, I have advanced my
              understanding of WPF (Windows Presentation Foundation) and
              deepened my knowledge of C#. I gained hands-on experience with
              WPF's features, such as data binding and custom controls, and
              became proficient in applying these to real-world applications.
              Additionally, I was introduced to essential software design
              principles, like the MVVM (Model-View-ViewModel) architectural
              pattern and dependency injection, which were new concepts for me.
              These principles not only enhanced my technical skills but also
              improved the maintainability of the code I worked on. I also
              focused on writing clean, readable code, which is important for
              effective collaboration and long-term project success.
              <br></br>
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-3">
              2. Enhance my organizational and time management skills
            </h3>
            <p className="">
              During the work term, I consistently kept a log of my weekly
              tasks. This allowed me to allocate my time efficiently and ensured
              that I stayed on track with my tasks. I am excited to continue
              honing my time management and organizational skills as I progress
              in my software developer journey.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-3">
              3. Improve my oral communication skills
            </h3>
            <p className="">
              Reflecting on my oral communication skills, I believe I have made
              some noticeable progress in the past 8 months. During our daily
              stand-up meetings, I regularly provided updates on my progress. We
              also had our developer's meeting, where I shared my perspective on
              upcoming tasks and discussed the challenges I faced. Because of
              this, I think I improved my ability to convey technical
              information and engage with the team. I'm committed to continuing
              to work on these skills.
            </p>
          </div>
        </div>
      ),
      conc: (
        <div className="prose prose-neutral max-w-none">
          <p className="leading-relaxed">
            In conclusion, my experience at MANTECH has been both educational
            and fulfilling. In addition to contributing to the project, I've
            encountered challenges, made mistakes and gained valuable knowledge.
            I am grateful for my colleagues' and supervisor's invaluable
            assistance. Looking ahead, I am eager to continue contributing to
            the project and further expanding my skills in software development.
          </p>
        </div>
      ),
    },
  };

  return (
    <section
      id="coop"
      className="max-w-3xl mx-auto py-24 border-t border-neutral-100"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 font-sans">
        co-op experience
      </h2>

      <div className="space-y-12 text-sm">
        <div className="flex space-x-6">
          {["summer 2023", "winter 2024 & summer 2024"].map((term) => (
            <button
              key={term}
              onClick={() => {
                setSelectedTerm(term);
                setActiveSection("intro");
              }}
              className={`px-4 py-2 transition-all duration-300 ${
                selectedTerm === term
                  ? "bg-black text-white"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
              }`}
            >
              {term}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-10 text-sm">
          <div className="w-full md:w-1/4">
            <div className="sticky top-24">
              <nav className="space-y-2">
                {[
                  { id: "intro", label: "overview" },
                  { id: "aboutEmp", label: "about the employer" },
                  { id: "jobDes", label: "job description" },
                  { id: "learnGoals", label: "learning goals" },
                  { id: "conc", label: "conclusion" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`block text-left w-full px-4 py-2 transition-all duration-300 border-l-2 ${
                      activeSection === item.id
                        ? "border-black text-black font-medium"
                        : "border-transparent text-neutral-500 hover:text-black hover:border-neutral-300"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <div className="w-full md:w-3/4">
            {contentMap[selectedTerm][activeSection]}
          </div>
        </div>
      </div>
    </section>
  );
}
