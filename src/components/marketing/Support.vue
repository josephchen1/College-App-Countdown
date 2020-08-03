<template>
  <div id="landingpage" class="home_wrapper">
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
  />
    <div class="section_01">
      <div class="container">
        <div class="rows is-vcentered">
          <div class="row has-text-centered">
            <br>
            Here's some support and love from others :) <br>
            <h6 class="disclaimer">note: if you want to add to this, fill out this form or invite some friends to! <a href="https://tinyurl.com/sendloveandsupport">https://tinyurl.com/sendloveandsupport</a> </h6> <br>
          </div>
          <div class="row has-text-centered">
            <button class="button is-medium is-primary" @click="alertSupport">Click here!</button>
          </div>
        </div>
      </div>
    </div>
    <div class="section_02">
      <div class="container">
        <div class="rows is-vcentered">
          <div class="row has-text-centered">
            Here's some words of wisdom from others :) <br>
            <h6 class="disclaimer"> disclaimer: these aren't professional advice :) just some well-intentioned ones from other students :) </h6>
            <br>
          </div>
          <div class="row has-text-centered">
            <button class="button is-medium is-primary" @click="alertAdvice">Click here!</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.button.is-medium {
  width: 160px;
  margin-right: .5rem;
  position: relative;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  justify-content: center;
  white-space: nowrap;
}
.section_02 {
  background-color: #f9f5ff;
  clear: left;
  padding: 60px 0;
}
.section_03 {
  background-color: #ffffff;
  clear: left;
  padding: 60px 0;
}
.section_01 {
  padding-top: 20px;
  padding-bottom: 50px;
  float: left;
  width: 100%;
}

.disclaimer {
  font-size: 16px;
}
</style>

<script>
export default {
  name: 'support-generator',
  data () {
    return {
      supportmessages: [
        'heyo! the grind is real but it doesnt define your individuality and successes in the future; it\'s simply a stepping stone to advance your passions. keep at it!!',
        'Millions of fellow high-schoolers are going through the same stressful process that you are going through right now. Don\'t be afraid to sob or cry, there will always be someone to hold you on the other side!',
        'I know it sucks, but it\'s probably the most important time of your high school years. Push through the next few months!',
        'hello!! just popping in to say that you are strong and powerful and capable and all things good. i have no idea how helpful this will be but i want to encourage you and remind you to have confidence in yourself!! after all, you are not the product of those around you, you are the makings of yourself. best of luck, you will do so well and i will support you all the way! -Sandi C/O 2020',
        'Power through this friends! It seems very tough and you might be really scared that your application isn\'t up to par with the others, but you are a unique individual. Don\'t be afraid to share your story and show depth in your essays to the reader so that they can see who you are as a person. Many schools are looking for students who can contribute to the community, culture, atmosphere of the school, so give them a reason to choose you. :) -Alicia C/O 2020',
        'Y\'all gonna do great during college apps and you\'re gonna get into your dream schools! -William C/O 2021',
        'hi guys! I just want to say that even though the process right now might seem rough and hard to get through, you guys are all killing it! -Riya C/O 2021',
        'You got this! You\'ve gotten through high school, and college apps have nothing on you. Pump out those essays like the beast you are. I believe in you! -David C/O 2020',
        'OWN THIS YEAR -Mark C/O 2020',
        'You got this!! :^)',
        'i believe in you! trader joe jo believes in you! you\'re amazing:) take a deep breath and type-you\'ve got this. just be yourself and everything will work out:)-kath! (aka cat kat!) C/O 2021',
        'Don\'t give up! You\'ll be fine :D just keep your head up and don\'t stop until you\'re satisfied.',
        'I know it\'s tough, I\'ve been there too, but I also know that you will get through this and even grow in the process! Power through :) You got this.',
        'you can do this because you guys are the baddest bitches duh. applying to college is such a stressful yet simple process if you don’t overthink it. if you can bear through covid, you can get through a few months of writing or maybe a couple weeks of cramming!! -Pannisy C/O 2020',
        'Don\'t compare yourself with other people if you guys edit each other\'s essays or hear about which college they get into!  Believe that what you have, and don\'t place your worth in which college you get into.  No matter what college you go to, with hard work and perseverance, you can make the most of college and still be successful!',
        'You\'re doing great! Keep up the great work :) and don\'t forget to take breaks from time to time!',
        'You. Can. Do. It! It\'ll all be over in a couple months and I promise it\'ll all work out. Don\'t stress too much! - HS C/O 2019',
        'You are amazing and talented! Trust the process and stay hopeful — you’re going to do GREAT THINGS :)'
      ],
      chosensupportmessage: '',
      advicemessages: [
        'dont stress just finesse :)',
        'The process is hard and time-consuming, but it provides a rare opportunity to introspect about your life and the impact you had. You might be tempted to say you lead X number of people or raised X dollars, but try to think about the one person that you might\'ve had the most impact on. Whether it\'s helping a freshman crying in a corner because they were scared about math class or helping your best friend overcome their depression, you had an impact on someone else\'s life and admissions officers want to hear that story.',
        'I think everyone struggles with coming up common app essay topics, and often worry about whether a topic is "good enough" or not. I recommend thinking about details from a micro level - what are some small events that shaped who you are, or behaviors and habits that reflect qualities of yours? Try to draw parallels and find patterns in your personal history, and tell that unique story of yours.',
        'i\'m not qualified at all to give college application advice but trust your instinct!! cast your net wide, and stay true to yourself the whole way through--it will serve you more than you realize. -Sandi C/O 2020',
        '-don\'t procrastinate and try to submit your application very last minute -start drafting in August/September, don\'t make too many drafts for no reason(like 10 LOL do 5 drafts most and make small edits or you will actually go crazy) -don\'t be afraid to peer edit each other\'s papers or ask your teacher\'s to read through them -put the most important ECs to you at the top of your list -GPA, SAT/ACT, ECs are obviously very important, but it\'s a little too late to change anything, so just make sure your responses are good:)',
        'Stay focused and never overthink how you write essays because you have to be yourself!',
        'The majority of this process is out of your control so literally just do whatever you can about the parts that you do have control over but don’t worry about the rest. -Riya C/O 2021',
        'I know a lot of people say this, but I\'m going to say it again: college isn\'t everything. Life is so much more than going to a big name college and getting a high paying job. Life is about the moments you share with others. Spend your life worrying about your character and becoming the person you\'ve always wanted to become, whether that be changing your hairstyle to gain more confidence or treating your peers with more respect and listening to others. Chase your dreams. We only get one shot at life, don\'t spend it going the safe route or the route everyone expects you to take. Do what you\'re passionate about, not what society expects you to do. Good luck, and remember that college acceptances are a crapshoot. You are good enough to get into your dream school. But life has a weird way of working itself out, you\'ll see in the future. Trust the plan, believe in yourself. -David C/O 2020',
        'Do college essays with friends for other perspectives. -Mark C/O 2020',
        'the difference between harvard and community college is just the name:) in the end, college is just a label-- what really matters is what YOU make of it. what matters most is finding the right college for you, even if it\'s not necessarily the best. -kath! (aka cat kat!) C/O 2021',
        'Make sure to reuse essays to save time for prompts that have similar themes.',
        'Be honest with yourself! Don\'t be afraid of your weaknesses, but definitely highlight your growth and change. We are always changing and growing and that can be a great thing!',
        'if you’re anything like me, your quickest complete draft will be THE common app essay. sometimes, things just flow when you’re writing about an idea or story you’re just so passionate about. these are the narratives that make you YOU. remember, quality>quantity. if the basis of your essay sucks, it’s still going to suck no matter how many fancy words or hours you put into it. also, you’ll no doubt encounter writer’s block. in these terrifying times, don’t force out shitty drafts. go out with your friends (if possible) & try to make memories though it’s a bit tough right now. and while you’re having fun, be sure to keep an eye out for things to write about. inspiration doesn’t always come from within. i doubt this applies to everyone; but for me; binging those ivy decision, stats, and personal essay videos only hindered me in my common app essay journey. of course, i still flushed out maybe 4 or 5 different essays, but all of which sounded completely different in structure and style. reading or listening to others’ essays can be problematic... i personally couldn’t help but think “wow, i wish i wrote like that” or “dang, we don’t even speak the same language with all her shiny vocabulary”. so i subconsciously tried writing like all these people who weren’t me & i bet you can see why that’s so dumb because the truth is, this whole process is about YOU. it’s your one time to be narcissistic as hell and self-reflect (keep in mind narcissistic≠egotistical). don’t show the best version of yourself, but the true one. be unapologetic. be bold. be a lil quirky & embarrassing if that’s you. don’t mold your personality to the school. if you don’t belong there, you don’t want to be there. simple as that. & one last thing, it’s never too early but also never too late to start. don’t get discouraged or start cutting down your school list because you procrastinated. cram that shit. i completed 1 college app a day everyday for 2 weeks & one of those colleges is where i’m going!! when you feel like time is running out and have nothing to lose, your true self will shine through in your application anyway. now, go kill it you baddie😌💓🌟✨. -Pannisy C/O 2020',
        'Just trust that wherever you go, you will be fine!  From a CC to an Ivy League, just work hard, study hard, and try to do your best.  You can be successful no matter where you end up for college!',
        'Don\'t feel like you have to fit a certain template! It\'s better to write in your own voice and express yourself in your own words.',
        'start early!',
        'I promise things will always work out in ways you may not have expected; trust the process! Pick quality over quantity - don\'t burn yourself out by applying to too many schools.',
        'The college application process is difficult and unpredictable, but it’s nothing you can’t get through. Stay on top of your applications and be your genuine self. You’re amazing!'
      ],
      chosenadvicemessage: ''
    }
  },
  methods: {
    alertSupport () {
      this.supportpicker()
      this.$buefy.dialog.alert({
        title: 'You got this!',
        message: this.chosensupportmessage,
        confirmText: 'I got this!'
      })
    },
    alertAdvice () {
      this.advicepicker()
      this.$buefy.dialog.alert({
        title: 'You got this!',
        message: this.chosenadvicemessage,
        confirmText: 'I got this!'
      })
    },
    supportpicker () {
      var chosenNumber = Math.floor(Math.random() * this.supportmessages.length)
      this.chosensupportmessage = this.supportmessages[chosenNumber]
    },
    advicepicker () {
      var chosenNumber = Math.floor(Math.random() * this.advicemessages.length)
      this.chosenadvicemessage = this.advicemessages[chosenNumber]
    }
  }
}
</script>
