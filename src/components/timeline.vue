<template>
  <div class="page-inner">
      <div class="page-title">
          <h3>Timeline</h3>
          <div class="page-breadcrumb">
              <ol class="breadcrumb">
                  <li><a href="/">Home</a></li>
                  <li class="active">Timeline</li>
              </ol>
            </div>
        </div>
        <section id="cd-timeline" class="cd-container">

      <div class="cd-timeline-block">
        <div class="cd-timeline-img cd-movie">
          <img width="30px" src="/static/Shadow_Icon_White.png" /> <span style="position: absolute; top: 3px; left: 120%;" >date</span>
        </div> <!-- cd-timeline-img -->

        <div class="cd-timeline-content">
          <h2>Title of section 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?</p>
          <span class="cd-date">Jan 18</span>
        </div> <!-- cd-timeline-content -->
      </div> <!-- cd-timeline-block -->

      <div class="cd-timeline-block">
        <div class="cd-timeline-img cd-picture">
          <img width="30px" src="/static/Shadow_Icon_White.png" /> <span style="position: absolute; top: 3px; left: 120%;" >date</span>
        </div> <!-- cd-timeline-img -->

        <div class="cd-timeline-content">
          <h2>Title of section 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, obcaecati, quisquam id molestias eaque asperiores voluptatibus cupiditate error assumenda delectus odit similique earum voluptatem doloremque dolorem ipsam quae rerum quis. Odit, itaque, deserunt corporis vero ipsum nisi eius odio natus ullam provident pariatur temporibus quia eos repellat consequuntur perferendis enim amet quae quasi repudiandae sed quod veniam dolore possimus rem voluptatum eveniet eligendi quis fugiat aliquam sunt similique aut adipisci.</p>
          <span class="cd-date">Jan 24</span>
        </div> <!-- cd-timeline-content -->
      </div> <!-- cd-timeline-block -->

      <div class="cd-timeline-block">
        <div class="cd-timeline-img cd-location">
        </div> <!-- cd-timeline-img -->

        <div class="cd-timeline-content">
          <h2>Title of section 4</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
          <span class="cd-date">Feb 14</span>
        </div> <!-- cd-timeline-content -->
      </div> <!-- cd-timeline-block -->

      <div class="cd-timeline-block">
        <div class="cd-timeline-img cd-location">
        </div>

        <div class="cd-timeline-content">
          <h2>Title of section 5</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.</p>
          <span class="cd-date">Feb 18</span>
        </div> <!-- cd-timeline-content -->
      </div> <!-- cd-timeline-block -->
    </section> <!-- cd-timeline -->
  </div>
</template>
<style scoped>

html, body {
  background-color: #222C32;
  height: 100%;
  font-family: 'Open Sans', sans-serif;
  box-sizing: border-box;
}

.cd-container {
width: 100%;
margin: 0;
padding: 0 10%;
border-radius: 2px;
}
.cd-container::after {
content: '';
display: table;
clear: both;
}

#cd-timeline {
position: relative;
padding: 2em 0;
margin-top: 2em;
margin-bottom: 2em;
}
#cd-timeline::before {
content: '';
position: absolute;
top: 0;
left: 25px;
height: 100%;
width: 4px;
background: #7E57C2;
}
@media only screen and (min-width: 1170px) {
#cd-timeline {
  margin-top: 3em;
  margin-bottom: 3em;
}
#cd-timeline::before {
  left: 50%;
  margin-left: -2px;
}
}

.cd-timeline-block {
position: relative;
width: 100%;
margin: 2em 0;
}
.cd-timeline-block:after {
content: "";
display: table;
clear: both;
}
.cd-timeline-block:first-child {
margin-top: 0;
}
.cd-timeline-block:last-child {
margin-bottom: 0;
}
@media only screen and (min-width: 1170px) {
.cd-timeline-block {
  margin: 4em 0;
}
.cd-timeline-block:first-child {
  margin-top: 0;
}
.cd-timeline-block:last-child {
  margin-bottom: 0;
}
}

.cd-timeline-img {
position: absolute;
top: 8px;
left: 12px;
width: 30px;
height: 30px;
border-radius: 50%;
box-shadow: 0 0 0 4px #7E57C2, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
}
.cd-timeline-img {
background: #673AB7;
}
@media only screen and (min-width: 1170px) {
.cd-timeline-img {
  width: 30px;
  height: 30px;
  left: 50%;
  margin-left: -15px;
  margin-top: 15px;
  /* Force Hardware Acceleration in WebKit */
  -webkit-transform: translateZ(0);
  -webkit-backface-visibility: hidden;
}
}

.cd-timeline-content {
position: relative;
margin-left: 60px;
margin-right: 30px;
background: #333C42;
border-radius: 2px;
padding: 1em;
.timeline-content-info {
  background: #2B343A;
  padding: 5px 10px;
  color: rgba(255,255,255,0.7);
  font-size: 12px;
  box-shadow:  inset 0 2px 0 rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  i {
    margin-right: 5px;
  }
  .timeline-content-info-title, .timeline-content-info-date {
    width: calc(50% - 2px);
    display: inline-block;
  }
  @media (max-width: 500px) {
    .timeline-content-info-title, .timeline-content-info-date {
      display: block;
      width:100%;
    }
  }
}
.content-skills {
  font-size: 12px;
  padding:0;
  margin-bottom: 0;
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  li {
    background: #40484D;
    border-radius: 2px;
    display: inline-block;
    padding: 2px 10px;
    color: rgba(255,255,255,0.7);
    margin: 3px 2px;
    text-align: center;
    flex-grow: 1;
  }
}
}
.cd-timeline-content:after {
content: "";
display: table;
clear: both;
}
.cd-timeline-content h2 {
color: rgba(255,255,255,.9);
margin-top:0;
margin-bottom: 5px;
}
.cd-timeline-content p, .cd-timeline-content .cd-date {
color: rgba(255,255,255,.7);
font-size: 13px;
font-size: 0.8125rem;
}
.cd-timeline-content .cd-date {
display: inline-block;
}
.cd-timeline-content p {
margin: 1em 0;
line-height: 1.6;
}

.cd-timeline-content::before {
content: '';
position: absolute;
top: 16px;
right: 100%;
height: 0;
width: 0;
border: 7px solid transparent;
border-right: 7px solid #333C42;
}

@media only screen and (min-width: 768px) {
.cd-timeline-content h2 {
  font-size: 20px;
  font-size: 1.25rem;
}
.cd-timeline-content p {
  font-size: 16px;
  font-size: 1rem;
}
.cd-timeline-content .cd-read-more, .cd-timeline-content .cd-date {
  font-size: 14px;
  font-size: 0.875rem;
}
}
@media only screen and (min-width: 1170px) {
.cd-timeline-content {
  color: white;
  margin-left: 0;
  padding: 1.6em;
  width: 36%;
  margin: 0 5%
}
.cd-timeline-content::before {
  top: 24px;
  left: 100%;
  border-color: transparent;
  border-left-color: #333C42;
}
.cd-timeline-content .cd-date {
  position: absolute;
  width: 100%;
  left: 122%;
  top: 6px;
  font-size: 16px;
  font-size: 1rem;
}
.cd-timeline-block:nth-child(even) .cd-timeline-content {
  float: right;
}
.cd-timeline-block:nth-child(even) .cd-timeline-content::before {
  top: 24px;
  left: auto;
  right: 100%;
  border-color: transparent;
  border-right-color: #333C42;
}
.cd-timeline-block:nth-child(even) .cd-timeline-content .cd-read-more {
  float: right;
}
.cd-timeline-block:nth-child(even) .cd-timeline-content .cd-date {
  left: auto;
  right: 122%;
  text-align: right;
}
}
</style>
<script>
export default {
  name: 'Timeline',
  data () {
    return {

    }
  }
}
</script>
