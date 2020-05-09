<template>
  <div>
    <q-page-container>
      <q-page>
        <!-- Banner Content -->
        <q-parallax
          :height="850"
          :speed="1"
        >
          <template v-slot:media>
            <img src="@/assets/images/banner-1.jpg" />
          </template>

          <template v-slot:content="scope">
            <div
              class="absolute column items-center"
              :style="{
                  top: (scope.percentScrolled * -20) + '%',
                  left: 0,
                  right: 0
                }"
            >
              <img
                class="root-logo"
                src="@/assets/images/main-logo/main-logo-animated.svg"
                alt="Root Logo"
              />
              <div class="banner-content-main">
                <span>John Rafael M. Arias</span>
                <span class="block">
                  <b>Front-end Developer</b> |
                  <b>Back-end Developer</b> |
                  <b>Web Designer</b>
                </span>
                <p>"I design and code beautifully simple things, and I love what I do."</p>
                <q-btn
                  color="teal"
                  @click="dialog = true"
                >
                  <q-icon
                    left
                    size="20px"
                    name="assignment_ind"
                  />
                  <div>My Resume</div>
                </q-btn>
              </div>
            </div>
          </template>
        </q-parallax>

        <!-- Overview Content -->
        <q-parallax
          class="gt-sm"
          :height="850"
        >
          <div class="q-px-lg qpb-md timeline-banner">
            <q-timeline color="secondary">
              <h4 class="text-center">Overview</h4>
              <h5>Hi, I’m John. Nice to meet you.</h5>
              <div class="width-90 text-justify">
                <span class="block rs-fs-12">
                  Since beginning my journey as a web developer and front-end developer nearly 3 years ago, I've done remote work for students of QCPU for their projects,
                  developing proffessors existing projects, and collaborated with talented people to create and develop a create digital products for both business and consumer use.
                  I'm quietly confident, naturally curious, and perpetually working on improving my skills at a time.
                </span>
              </div>

              <p class="mt-1 font-weight-bold rs-fs-12">College Graduate</p>
              <q-timeline-entry
                title="Quezon City Polytechnic University (QCPU)"
                subtitle="April 25, 2019"
                color="orange"
                icon="done_all"
              >
                <div class="rs-fs-10">
                  <p class="mt--1">
                    <span class="font-weight-bold">Course:</span> Bachelor of Science in Information Technology (I.T.)
                  </p>
                  <p class="mt--1">
                    <span class="font-weight-bold">Major:</span> Information Technology Management
                  </p>
                  <p class="mt--1">
                    <span class="font-weight-bold">Field of Study:</span> Information Technology
                  </p>
                  <p class="font-weight-bold">Capstone Project: “QCPU SAKAY" – A Bus Transportation System</p>
                </div>
              </q-timeline-entry>

              <p class="mt-1 font-weight-bold rs-fs-12">Work Experience</p>
              <q-timeline-entry
                title="ServRevo Corp."
                subtitle="April 2018 – February 2019"
                color="orange"
                icon="done_all"
              >
                <div class="rs-fs-10">
                  <p class="mt--1">
                    <span class="font-weight-bold">Position:</span> Front-end Developer / Full stack (Trainee)
                  </p>
                  <p class="mt--1">
                    <span class="font-weight-bold">Specialization:</span> IT/Computer – Software Development
                  </p>
                  <p class="mt--1">
                    <span class="font-weight-bold">Industry:</span> Outsourcing (Call Center / BPO)
                  </p>
                  <p class="mt--1">
                    <span class="font-weight-bold">System:</span> Seats & Room Reservation System
                  </p>
                </div>
              </q-timeline-entry>
            </q-timeline>
          </div>
          <template v-slot:media>
            <img
              class="profile-timeline-overlay"
              src="@/assets/images/profile-timeline-vintage.jpg"
            />
          </template>
        </q-parallax>

        <div class="row lt-md">
          <div class="col-xs-12 col-sm-6 col-md-6">
            <q-card class="my-card m-1 p-1 height-100">
              <q-card-section>
                <h4 class="text-center">Overview</h4>
                <q-parallax
                  class="mt--2"
                  :height="200"
                >
                  <template v-slot:media>
                    <img src="@/assets/images/banner-2.jpg" />
                  </template>

                  <template v-slot:content="scope">
                    <div
                      class="absolute column items-center"
                      :style="{
                          opacity: 0.45 + (1 - scope.percentScrolled) * 0.8,
                          top: (scope.percentScrolled * 30) + '%',
                          left: 0,
                          right: 0
                        }"
                    >
                      <div class="text-black text-center">
                        <h5 class="text-center font-weight-bold text-white">"Hi, I’m John. Nice to meet you."</h5>
                      </div>
                    </div>
                  </template>
                </q-parallax>

                <div class="mt-2 text-justify">
                  <span class="block rs-fs-12">
                    Since beginning my journey as a web developer and front-end developer nearly 3 years ago, I've done remote work for students of QCPU for their projects,
                    developing proffessors existing projects, and collaborated with talented people to create and develop a create digital products for both business and consumer use.
                    I'm quietly confident, naturally curious, and perpetually working on improving my skills at a time.
                  </span>
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6">
            <q-card class="my-card m-1 p-1 height-100">
              <q-card-section>
                <q-timeline color="secondary">
                  <p class="mt-1 font-weight-bold rs-fs-12">College Graduate</p>
                  <q-timeline-entry
                    title="Quezon City Polytechnic University (QCPU)"
                    subtitle="April 25, 2019"
                    color="orange"
                    icon="done_all"
                  >
                    <div class="rs-fs-10">
                      <p class="mt--1">
                        <span class="font-weight-bold">Course:</span> Bachelor of Science in Information Technology (I.T.)
                      </p>
                      <p class="mt--1">
                        <span class="font-weight-bold">Major:</span> Information Technology Management
                      </p>
                      <p class="mt--1">
                        <span class="font-weight-bold">Field of Study:</span> Information Technology
                      </p>
                      <p class="font-weight-bold">Capstone Project: “QCPU SAKAY" – A Bus Transportation System</p>
                    </div>
                  </q-timeline-entry>

                  <p class="mt-1 font-weight-bold rs-fs-12">Work Experience</p>
                  <q-timeline-entry
                    title="ServRevo Corp."
                    subtitle="April 2018 – February 2019"
                    color="orange"
                    icon="done_all"
                  >
                    <div class="rs-fs-10">
                      <p class="mt--1">
                        <span class="font-weight-bold">Position:</span> Front-end Developer / Full stack (Trainee)
                      </p>
                      <p class="mt--1">
                        <span class="font-weight-bold">Specialization:</span> IT/Computer – Software Development
                      </p>
                      <p class="mt--1">
                        <span class="font-weight-bold">Industry:</span> Outsourcing (Call Center / BPO)
                      </p>
                      <p class="mt--1">
                        <span class="font-weight-bold">System:</span> Seats & Room Reservation System
                      </p>
                    </div>
                  </q-timeline-entry>
                </q-timeline>
              </q-card-section>
            </q-card>
          </div>
        </div>

        <!-- Role Content -->
        <div class="role-header-svg">
          <svg
            class="role-draw-art"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon
              class="role-draw-art-sm"
              fill="white"
              points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"
            />
            <polygon
              class="role-draw-art-lg"
              fill="white"
              points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100"
            />
          </svg>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-4 role-card-content">
            <q-card class="role-card">
              <q-card-section class="text-center">
                <div class="row">
                  <div class="col-xs-5 col-sm-12 col-md-12">
                    <img
                      class="role-content-icon mt-3"
                      src="@/assets/images/dev-back-end.svg"
                      alt="Back-end Developer"
                      :height="80"
                    />
                  </div>
                  <div class="col-xs-7 col-sm-12 col-md-12">
                    <h5 class="font-weight-bold role-content-title">Back-end Developer</h5>
                  </div>
                  <div class="divider-art divider-art-icon">
                    <div class="shadow"></div>
                  </div>
                  <p class="rs-fs-14">I generally like to code from different server side programming languages from scratch and Integrating APIs.</p>
                </div>
              </q-card-section>

              <q-card-section>
                <p class="rs-fs-14 font-weight-bold">What I can do for as a Back-end Developer:</p>
                <ul class="rs-fs-12">
                  <li>Can adapt from different server side programming languages or frameworks.</li>
                  <li>Integrating APIs from different applications.</li>
                  <li>Launched apps from dirrent hosting (firebase, hoststinger, etc.).</li>
                  <li>I can do database creation, integration, and management.</li>
                  <li>Using different types of databases like (MSSQL, MySQL, Firebase, Sql Server).</li>
                  <li>Reporting—generating analytics and statistics.</li>
                  <li>Backup and restore technologies for a website’s files and DB.</li>
                </ul>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-4 role-card-content">
            <q-card class="role-card">
              <q-card-section class="text-center">
                <div class="row">
                  <div class="col-xs-5 col-sm-12 col-md-12">
                    <img
                      class="mt-3"
                      src="@/assets/images/dev-front-end.svg"
                      alt="Front-end Developer"
                      :height="80"
                    />
                  </div>
                  <div class="col-xs-7 col-sm-12 col-md-12">
                    <h5 class="font-weight-bold role-content-title">Front-end Developer</h5>
                  </div>
                  <div class="divider-art divider-art-icon">
                    <div class="shadow"></div>
                  </div>
                  <p class="rs-fs-14">I like to code things from scratch or using a framework, and enjoy bringing ideas to life in the browser.</p>
                </div>
              </q-card-section>

              <q-card-section>
                <p class="rs-fs-14 font-weight-bold">Thigs I do beign a Front-end Developer:</p>
                <ul class="rs-fs-12">
                  <li>Designing using HTML/CSS</li>
                  <li>Creating and debugging JavaScript/jQuery</li>
                  <li>Using different CSS/Front-end Frameworks</li>
                  <li>Responsive Design</li>
                  <li>Version Control/Git</li>
                  <li>Testing/Debugging</li>
                  <li>Browser Developer Tools</li>
                  <li>Checking Web Performance</li>
                  <li>CSS Preprocessing</li>
                  <li>Command Line</li>
                </ul>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-4 role-card-content">
            <q-card class="role-card">
              <q-card-section class="text-center">
                <div class="row">
                  <div class="col-xs-5 col-sm-12 col-md-12">
                    <img
                      class="mt-3"
                      src="@/assets/images/dev-web-design.svg"
                      alt="Web Designer"
                      :height="80"
                    />
                  </div>
                  <div class="col-xs-7 col-sm-12 col-md-12">
                    <h5 class="font-weight-bold role-content-title">Web Designer</h5>
                  </div>
                  <div class="divider-art divider-art-icon">
                    <div class="shadow"></div>
                  </div>
                  <p class="rs-fs-14">I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                </div>
              </q-card-section>

              <q-card-section>
                <p class="rs-fs-14 font-weight-bold">Things I enjoy designing:</p>
                <p class="rs-fs-12">UX, UI, Web, Mobile, Apps, Logos, Video Editing</p>
                <p class="rs-fs-14 font-weight-bold">Design Tools:</p>
                <ul class="rs-fs-12">
                  <li>Adobe XD</li>
                  <li>Adobe Illustrator</li>
                  <li>Adobe Photoshop</li>
                  <li>Adobe After Effects</li>
                  <li>Adobe Premier</li>
                </ul>
              </q-card-section>
            </q-card>
          </div>
        </div>

        <!-- Skills Content -->
        <div class="divider-art-icon">
          <div class="shadow"></div>
          <div class="icon">
            <img src="https://t1.gstatic.com/images?q=tbn:ANd9GcQsmMfybMIwoE5etmOIAuvnFWdfv_8C1Bq15urJFqwhhI55FyYNP2YuUA" />
          </div>
        </div>

        <div class="row">

          <div
            id="language-and-frameworks-container"
            class="col-xs-12 col-sm-12 col-md-8 white"
          >
            <p class="grey-text font-weight-bold rs-fs-14 text-center m-2">Languages and Frameworks Used</p>
            <div class="col-12">

              <div class="row m-1">
                <div
                  class="col-5"
                  style="padding: 2px"
                >
                  <div class="skill-card-md blue-grey">
                    <img
                      src="../../../src/assets/images/tech-skills/css-frameworks.png"
                      alt="CSS Frameworks"
                      style="height: inherit; width: 100%"
                    />
                    <p class="pos-absolute-center font-weight-bold text-ucase white-text mt-3">CSS Frameworks</p>
                  </div>
                  <div class="col-12">
                    <div class="row">
                      <div class="col-6">
                        <div class="skill-card-sm yellow">
                          <div>
                            <img
                              src="../../../src/assets/images/tech-skills/javascript.png"
                              alt="Javascript"
                              style="height: 80px; width: 80px"
                            />
                            <p>javascript</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="skill-card-sm dark-blue">
                          <div>
                            <img
                              src="../../../src/assets/images/tech-skills/jquery.png"
                              alt="Jquery"
                              style="height: 80px; width: 80px"
                            />
                            <p class="white-text">jquery</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="skill-card-sm teal">
                          <div>
                            <img
                              src="../../../src/assets/images/tech-skills/vue.png"
                              alt="Vue"
                              style="height: 80px; width:80px"
                            />
                            <p class="white-text">vue js</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="skill-card-sm blue">
                          <div>
                            <img
                              src="../../../src/assets/images/tech-skills/ajax.png"
                              alt="Ajax"
                              style="height: 80px; width: 80px"
                            />
                            <p class="white-text">ajax</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-5"
                  style="padding: 2px"
                >
                  <div class="row">
                    <div class="col-6">
                      <div class="skill-card-sm pale-blue">
                        <div>
                          <img
                            src="../../../src/assets/images/tech-skills/php.png"
                            alt="PHP"
                            style="height: 80px; width: 90px"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="skill-card-sm purple">
                        <div>
                          <img
                            src="../../../src/assets/images/tech-skills/c-sharp.png"
                            alt="C#"
                            style="height: 80px; width: 80px"
                          />
                          <p class="white-text">c#</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="skill-card-sm deep-purple">
                        <div>
                          <!-- <img
                          src=""
                          alt="VB.Net"
                          style="height: 80px; width: 80px;"
                        /> -->
                          <span class="white-text">vb.net</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="skill-card-sm blue-grey">
                        <div>
                          <img
                            src="../../../src/assets/images/tech-skills/python.png"
                            alt="Python"
                            style="height: 80px; width: 80px;"
                          />
                          <p class="white-text">python</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="skill-card-md red">
                        <div>
                          <img
                            src="../../../src/assets/images/tech-skills/ruby-on-rails.png"
                            alt="Ruby On Rails"
                            style="height: 80px; width: 80px;"
                          />
                          <p class="white-text">ruby on rails</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-2"
                  style="padding: 2px"
                >
                  <div class="skill-card-sm light-grey">
                    <div>
                      <img
                        src="../../../src/assets/images/tech-skills/mysql.png"
                        alt="MySQL"
                        style="height: 80px; width: 80px;"
                      />
                      <p>mysql</p>
                    </div>
                  </div>
                  <div class="skill-card-sm light-grey">
                    <div>
                      <img
                        src="../../../src/assets/images/tech-skills/firebase.png"
                        alt="Firebase"
                        style="height: 80px; width: 80px;"
                      />
                      <p>firebase</p>
                    </div>
                  </div>
                  <div class="skill-card-sm light-grey">
                    <div>
                      <img
                        src="../../../src/assets/images/tech-skills/ms-sql-server.png"
                        alt="Microsoft SQL Server"
                        style="height: 80px; width: 80px;"
                      />
                      <p>ms sql server</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-4 white">
            <p class="grey-text font-weight-bold rs-fs-14 text-center m-2">Communication and writing skills</p>
            <div class="row m-2 mt-3">
              <div class="col-3">
                <p class="font-weight-bold rs-fs-16">Filipino</p>
              </div>
              <div class="col-9">
                <q-linear-progress
                  rounded
                  style="height: 20px"
                  :value="filipino_progress"
                  color="secondary"
                  class="q-mt-sm"
                />
              </div>
              <div class="col-3">
                <p class="font-weight-bold rs-fs-16">English</p>
              </div>
              <div class="col-9">
                <q-linear-progress
                  rounded
                  style="height: 20px"
                  :value="english_progress"
                  color="secondary"
                  class="q-mt-sm"
                />
              </div>
            </div>
            <div class="row m-3 text-center">
              <div class="col-3">
                <p class="font-weight-bold rs-fs-14 m-1 mt-2">Filipino</p>
              </div>
              <div class="col-3">
                <q-circular-progress
                  show-value
                  font-size="12px"
                  :value="filipino_read"
                  size="50px"
                  :thickness="0.22"
                  color="teal"
                  track-color="grey-3"
                  class="q-ma-md"
                >{{ filipino_read }}%</q-circular-progress>
                <p>Read</p>
              </div>
              <div class="col-3">
                <q-circular-progress
                  show-value
                  font-size="12px"
                  :value="filipino_write"
                  size="50px"
                  :thickness="0.22"
                  color="teal"
                  track-color="grey-3"
                  class="q-ma-md"
                >{{ filipino_write }}%</q-circular-progress>
                <p>Write</p>
              </div>
              <div class="col-3">
                <q-circular-progress
                  show-value
                  font-size="12px"
                  :value="filipino_communicate"
                  size="50px"
                  :thickness="0.22"
                  color="teal"
                  track-color="grey-3"
                  class="q-ma-md"
                >{{ filipino_communicate }}%</q-circular-progress>
                <p>Communicate</p>
              </div>
              <div class="col-3">
                <p class="font-weight-bold rs-fs-14 m-1 mt-2">English</p>
              </div>
              <div class="col-3">
                <q-circular-progress
                  show-value
                  font-size="12px"
                  :value="english_read"
                  size="50px"
                  :thickness="0.22"
                  color="teal"
                  track-color="grey-3"
                  class="q-ma-md"
                >{{ english_read }}%</q-circular-progress>
                <p>Read</p>
              </div>
              <div class="col-3">
                <q-circular-progress
                  show-value
                  font-size="12px"
                  :value="english_write"
                  size="50px"
                  :thickness="0.22"
                  color="teal"
                  track-color="grey-3"
                  class="q-ma-md"
                >{{ english_write }}%</q-circular-progress>
                <p>Write</p>
              </div>
              <div class="col-3">
                <q-circular-progress
                  show-value
                  font-size="12px"
                  :value="english_communicate"
                  size="50px"
                  :thickness="0.22"
                  color="teal"
                  track-color="grey-3"
                  class="q-ma-md"
                >{{ english_communicate }}%</q-circular-progress>
                <p>Communicate</p>
              </div>
            </div>
          </div>
        </div>
        <div class="divider-art divider-art-icon">
          <div class="shadow"></div>
        </div>

      </q-page>
    </q-page-container>

    <!-- Dialog - Resume Content  -->
    <q-dialog
      v-model="dialog"
      persistent
      :maximized="resume_maximized_toggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-primary text-white">
        <q-bar>
          <q-space />
          <q-btn
            dense
            flat
            icon="minimize"
            @click="resume_maximized_toggle = false"
            :disable="!resume_maximized_toggle"
          >
            <q-tooltip
              v-if="resume_maximized_toggle"
              content-class="bg-white text-primary"
            >Minimize</q-tooltip>
          </q-btn>
          <q-btn
            dense
            flat
            icon="crop_square"
            @click="resume_maximized_toggle = true"
            :disable="resume_maximized_toggle"
          >
            <q-tooltip
              v-if="!resume_maximized_toggle"
              content-class="bg-white text-primary"
            >Maximize</q-tooltip>
          </q-btn>
          <q-btn
            dense
            flat
            icon="close"
            v-close-popup
          >
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>
        <q-card-section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.</q-card-section>
      </q-card>
    </q-dialog>

  </div>
</template>

<style scoped>
/* Banner Content */
.root-logo {
  height: calc(5% + 60vmin);
  width: calc(5% + 60vmin);
  opacity: 0.5;
}

@media only screen and (max-width: 800px) {
  .root-logo {
    margin-top: calc(3em + 1vmin);
  }
}

.banner-content-main {
  position: absolute;
  margin-top: calc(33em + 25vmin);
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 90%;
}

@media only screen and (max-width: 599px) {
  .banner-content-main {
    position: absolute;
    margin-top: calc(30em + 15vmin);
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 90%;
  }
}

.banner-content-main span:nth-child(1) {
  font-size: calc(1.2em + 1.8vmin);
  font-weight: 500;
  color: #070707;
}

.banner-content-main span:nth-child(2) {
  font-size: calc(1em + 1.4vmin);
  color: #070707;
}

.banner-content-main p:nth-child(3) {
  margin-top: 2em;
  margin-bottom: 2em;
  font-size: calc(1em + 1.4vmin);
  color: #fafafa;
}

@media only screen and (max-width: 599px) {
  .banner-content-main p:nth-child(3) {
    color: #070707;
  }
}

/* Overview Content  */
.timeline-banner {
  width: 70%;
  background: #fafafa;
  border-bottom-right-radius: 2800px 5050px;
  position: absolute;
  top: 0 !important;
  bottom: 0 !important;
  left: 0 !important;
}

@media only screen and (min-width: 1439px) {
  .timeline-banner {
    width: 50%;
  }
}

/* Role Content */
.role-header-svg {
  position: relative;
  height: 300px;
  border-width: 0px;
  background-image: linear-gradient(#314755, #26a0da);
}

.role-draw-art {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;
}

@media only screen and (max-width: 699px) {
  .role-draw-art-lg {
    display: none;
    border-width: 0px;
  }
}

@media only screen and (min-width: 700px) {
  .role-draw-art-sm {
    display: none;
    border-width: 0px;
  }
}

.role-card-content {
  padding: 1em;
  margin-top: -15em;
}

.role-card-content:nth-child(2) {
  margin-top: -8em;
}

@media only screen and (max-width: 1023px) {
  .role-card-content:nth-child(1) {
    margin-top: -20em;
  }

  .role-card-content:nth-child(2) {
    margin-top: 5px;
  }

  .role-card-content:nth-child(3) {
    margin-top: 5px;
  }
}

.role-card {
  height: 100%;
  width: 100%;
}

/* Skills Content */
.divider-art-icon {
  margin: auto;
  margin-top: calc(5% + 1vmin);
  margin-bottom: calc(3% + 1vmin);
  width: 100%;
  position: relative;
}

.divider-art {
  width: 80%;
  margin-top: -1px !important;
}

.divider-art-icon .shadow {
  overflow: hidden;
  height: 20px;
}

.divider-art-icon .shadow:after {
  content: "";
  display: block;
  margin: -25px auto 0;
  width: 100%;
  height: 25px;
  border-radius: 125px/12px;
  box-shadow: 0 0 8px black;
}

.divider-art-icon .icon {
  width: 70px;
  height: 70px;
  position: absolute;
  bottom: 100%;
  margin-bottom: -35px;
  left: 50%;
  margin-left: -25px;
  border-radius: 100%;
  box-shadow: 0 2px 4px #999;
  background: white;
}

.divider-art-icon img {
  position: absolute;
  margin: 4px;
  max-width: 60px;
  border-radius: 100%;
  border: 1px dashed #aaa;
}

.skill-card-sm {
  position: relative;
  background: #fefefe;
  height: 18vh;
  width: 95%;
  padding: 5px;
  margin: 10px 0 3px 0;
  border-radius: 2px;
  display: inline-block;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.skill-card-sm div {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-weight: bold;
  font-size: calc(0.8em + 0.6vmin);
  text-transform: uppercase;
}

@media only screen and (max-width: 768px) {
  .skill-card-sm {
    height: 14vh;
    width: 95%;
  }
}

@media only screen and (max-width: 589px) {
  .skill-card-sm {
    height: 10vh;
    width: 95%;
  }
}

@media only screen and (max-width: 375px) {
  .skill-card-sm {
    height: 8vh;
    width: 95%;
  }
}

@media only screen and (max-width: 320px) {
  .skill-card-sm {
    height: 6vh;
    width: 95%;
  }
}

.skill-card-md {
  position: relative;
  background: #fefefe;
  height: 18vh;
  width: 97.5%;
  margin: 10px 0 4px 0;
  border-radius: 2px;
  display: inline-block;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.skill-card-md div {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-weight: bold;
  font-size: calc(0.8em + 0.6vmin);
  text-transform: uppercase;
}

@media only screen and (max-width: 768px) {
  .skill-card-md {
    height: 14vh;
    width: 97.5%;
  }
}

@media only screen and (max-width: 589px) {
  .skill-card-md {
    height: 10vh;
    width: 97.5%;
  }
}

@media only screen and (max-width: 375px) {
  .skill-card-md {
    height: 8vh;
    width: 97.5%;
  }
}

@media only screen and (max-width: 320px) {
  .skill-card-md {
    height: 6vh;
    width: 97.5%;
  }
}

.skill-card-sm:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.skill-card-md:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

@media only screen and (max-width: 768px) {
  #language-and-frameworks-container {
    display: none;
  }
}
</style>

<script>
export default {
  data () {
    return {
      dialog: false,
      resume_maximized_toggle: true,
      filipino_progress: 0.9,
      english_progress: 0.8,
      filipino_read: 100,
      filipino_write: 100,
      filipino_communicate: 90,
      english_read: 90,
      english_write: 90,
      english_communicate: 90
    }
  }
}
</script>
