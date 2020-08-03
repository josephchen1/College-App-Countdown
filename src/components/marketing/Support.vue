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
            <button class="button is-medium is-primary" @click="alertCustom">Generate</button>
          </div>
        </div>
      </div>
    </div>
    <div class="section_02">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column has-text-centered"></div>
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
.section_01 {
  padding-top: 20px;
  padding-bottom: 50px;
  float: left;
  width: 100%;
}
</style>

<script>
export default {
  name: 'support-generator',
  data () {
    return {
      messages: [
        'heyo! the grind is real but it doesnt define your individuality and successes in the future; it\'s simply a stepping stone to advance your passions. keep at it!!',
        'Millions of fellow high-schoolers are going through the same stressful process that you are going through right now. Don\'t be afraid to sob or cry, there will always be someone to hold you on the other side!',
        'I know it sucks, but it\'s probably the most important time of your high school years. Push through the next few months!',
        'hello!! just popping in to say that you are strong and powerful and capable and all things good. i have no idea how helpful this will be but i want to encourage you and remind you to have confidence in yourself!! after all, you are not the product of those around you, you are the makings of yourself. best of luck, you will do so well and i will support you all the way!',
        'You\'re amazing! You got this! You\'re almost like Joseph Chen! Wooooo :)',
        'Power through this friends! It seems very tough and you might be really scared that your application isn\'t up to par with the others, but you are a unique individual. Don\'t be afraid to share your story and show depth in your essays to the reader so that they can see who you are as a person. Many schools are looking for students who can contribute to the community, culture, atmosphere of the school, so give them a reason to choose you.:)',
        'Y\'all gonna do great during college apps and you\'re gonna get into your dream schools!',
        'hi guys! I just want to say that even though the process right now might seem rough and hard to get through, you guys are all killing it!'
      ],
      chosenmessage: ''
    }
  },
  methods: {
    alertCustom () {
      this.picker()
      this.$buefy.dialog.alert({
        title: 'You got this!',
        message: this.chosenmessage,
        confirmText: 'I got this!'
      })
    },
    picker () {
      var chosenNumber = Math.floor(Math.random() * this.messages.length)
      this.chosenmessage = this.messages[chosenNumber]
    }
  }
}
</script>
