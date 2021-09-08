const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const tabs = $$('.tab-list-item');
const songname = $('.info-song-name')
const singer = $('.info-song-author')
const audio = $('#audio')
const cdThumb = $('.cd-thumb')
const playBtn = $('.btn-toggle-play')
const player = $('.player')
const nextBtn = $('.next-btn')
const prevBtn = $('.prev-btn')
const randomBtn = $('.random-btn')
const repeatBtn = $('.repeat-btn')
const playlist = $('.playlist')
const musicIcon = $('.note-music-icon')
const duration = $('.duration')
const progressBar = $('.progress-bar')
const musicCurrentTime = $('.current')
const musicDuration = $('.duration')
const progressArea = $('.progress-area')
const panes = $('.all-music-container')




tabs.forEach((tab, index) => {
    tab.onclick = function () {
        $('.tab-list-item.active').classList.remove('active')
        this.classList.add('active')
    }
})

// 

const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
 
  songs: [
    {
      name: "Attention",
      singer: "Charlie Puth",
      time: "03:51",
      path: "./asset/css/songs/attention.mp3",
      image:"https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/covers/d/1/d170e3fda75ec7afe19b1e01df3fce8a_1453691682.jpg"
        
    },
    {
      name: "Shape Of You",
      singer: "Ed Sheeran",
      time: "03:44",
      path: "./asset/css/songs/shape_of_you.mp3",
      image:"https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/5/3/536e934b38ad1241d9c4077200c9f6d5_1488355224.jpg"
        
    },
    {
      name: "So Far Away",
      singer: "Martin Garrix & David Guetta",
      time: "02:51",
      path: "./asset/css/songs/so-far-away.mp3",
      image:"https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/b/0/b0468d844ac9a7329412930194bd0885_1512092625.jpg"
        
    },
  
    {
      name: "Let's Go ",
      singer: "Lensko",
      time: "03:27",
      path: "./asset/css/songs/lets-go.mp3",
      image:"https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/6/3/a/6/63a641e39feaed4fc0bcfe9e9f2d0628.jpg"
        
    },
    {
    name: "The Hills",
    singer: "The Weeknd ",
    time: "03:54",
    path: "./asset/css/songs/the-hills.mp3",
    image:"https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/b/f/1/d/bf1dc33ce0c2df8774dcb6cc1719a3ce.jpg"
      
    },
    {
      name: "So Far Away(cover)",
      singer: "Adam Christopher",
      time: "02:51",
      path: "./asset/css/songs/so-far-away-cover.mp3",
      image:"https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/9/c/3/2/9c3293ac2d8f3ae0707c98d6d0b90680.jpg"
        
      },
  
    {
      name: "Summertime",
      singer: "k-391",
      time: "04:42",
      path: "./asset/css/songs/summertime.mp3",
      image:"https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/8/2/9/9/82998293f8c34d7999339490d0b90118.jpg"
        
    },
    {
      name: "Dancing With Your Ghost",
      singer: "Sasha Alex Sloan",
      time: "03:19",
      path: "./asset/css/songs/dancing-with-your-ghost.mp3",
      image:"https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/2/e/6/52e650b515f8026039c1d7205dc3347b.jpg"
        
    },
    {
      name: "Nevada",
      singer: "Vicetone",
      time: "03:29",
      path: "./asset/css/songs/nevada.mp3",
      image:"https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/5/1/b/4/51b433e76d71b5c19041d7e0a3fd0a51.jpg"
        
    },
    {
      name: "Hellcat",
      singer: "Desmeon",
      time: "03:45",
      path: "./asset/css/songs/hellcat.mp3",
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/covers/6/3/6383c634f94fe97b95144156e7a9b90b_1473778884.jpg"
    },
    

    {
      name: "fade",
      singer: "Alan Walker",
      time: "03:33",
      path: "./asset/css/songs/faded.mp3",
      image:"https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/0/1/1/6/0116f19bfd59310943f02919ddc1356e.jpg"
        
    },
    {
      name: "That Girl",
      singer: "Olly Murs",
      time: "02:55",
      path: "./asset/css/songs/that-girl.mp3",
      image:"https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/0/e/7/0/0e703937b27a938b022da98ef9e4f08d.jpg"
        
    },
    {
      name: "Don't Cry ",
      singer: "Aviva",
      time: "03:31",
      path: "./asset/css/songs/dont-cry.mp3",
      image:"https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/4/5/f/2/45f261fa680907dac0f27c538306be55.jpg"
        
    },
    {
      name: "Pastlives ",
      singer: "sapientdream",
      time: "02:33",
      path: "./asset/css/songs/pastlive.mp3",
      image:"https://img.freepik.com/free-vector/music-streaming-icon_34230-233.jpg?size=338&ext=jpg"
        
    },
    {
      name: "Monnody",
      singer: "The Fat Rat",
      time: "04:50",
      path: "./asset/css/songs/monody.mp3",
      image:"https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/2/3/231aa7ebe1e944683aeb7483db76a9ed_1475208904.jpg"
        
    },
  
  
  ],
  render: function() {
    const htmls = this.songs.map((song, index) => {
      return `
      <div class="song-item ${index === this.currentIndex ? 'active3' : ''}" data-index="${index}">
      <div class="wrap-media">
          <div class="media-left">
              <div class="song-thumb">
                  <img src="${song.image}">
                  <i class="fas fa-play"></i>

              </div>
              <div class="song-info">
                  <div class="song-info-name">${song.name}</div>
                  <div class="song-info-author">${song.singer}</div>
              </div>
          </div>
          <div class="media-center">
              <div class="media-center-duration">${song.time}</div>
          </div>
          <div class="media-right">
              <div class="media-right-icon">
                  <i class="ti-microphone-alt"></i>
              </div>
              <div class="media-right-icon">
                  <i class="ti-heart"></i>
              </div>
              <div class="media-right-icon">
                  <i class="ti-more-alt"></i>
              </div>
          </div>
      </div>
  
  </div>

      `
    })
   playlist.innerHTML = htmls.join('')

  },
  defineProperties: function() {
    Object.defineProperty(this, 'currentSong', {
      get: function() {
        return this.songs[this.currentIndex]
      }
    })
  },
  handleEvents: function() {
    const _this = this
    // xử lý cd quay và dừng
      // const cdThumbAnimate = cdThumb.animate([
      //   {transform: 'rotate(360deg)'}
      // ], {
      //   duration: 10000,
      //   interations: Infinity
      // })
      // cdThumbAnimate.pause()

      // xử lý cd quay 
      const cdThumbAnimate = cdThumb.animate([
        {transform: 'rotate(360deg)'}
    ], {
        duration:10000,
        iterations: Infinity
    })
    cdThumbAnimate.pause()
    
    
    // Lắng nghe khi play
    audio.onplay = function() {
      _this.isPlaying = true
      player.classList.add('playing')
      cdThumbAnimate.play()
      musicIcon.classList.add('active4')

    }  
    // lắng nghe khi pause
    audio.onpause = function() {
      _this.isPlaying = false
      player.classList.remove('playing')
      cdThumbAnimate.pause()
      musicIcon.classList.remove('active4')
      

    }
    playBtn.onclick = function() {

      if(_this.isPlaying) {
        audio.pause()
      }else {
        audio.play()
      }
      
    } 

    
   
    // lắng nghe khi next song
    nextBtn.onclick = function() {
      if(_this.isRandom) {
        _this.playRandomSong()
      }else {
        _this.nextSong()
      }
      audio.play()
      _this.render()
    }
    // lắng nghe khi prev song
    prevBtn.onclick = function() {
      if(_this.isRandom) {
        _this.playRandomSong()
      }else {
        _this.prevtSong()
      }
      audio.play()
      _this.render()

    }
    // lắng nghe khi bật tắt random song
    randomBtn.onclick = function() {
      _this.isRandom = !_this.isRandom
      randomBtn.classList.toggle('active2', _this.isRandom)
    }
    // xử lý next song khi audio ended
    audio.onended = function() {
      if(_this.isRepeat) {
        audio.play()
      }else{
        nextBtn.click()
      }
     
    } 
    // xử lý khi repeat 1 song
    repeatBtn.onclick = function() {
      _this.isRepeat = !_this.isRepeat
      repeatBtn.classList.toggle('active2', _this.isRepeat)
    }
    playlist.onclick = function(e) {
      const songNode = e.target.closest('.song-item:not(.active3)')
       if(songNode && !e.target.closest('.media-right-icon')) {
        //  xử lý khi click vào song
         if(songNode) {
          _this.currentIndex = Number(songNode.dataset.index)
          _this.loadCurrentSong()
          _this.render()
          audio.play()
         }
       }
    }
    // khi tiến độ bài hát thay đổi
    audio.addEventListener("timeupdate", (e) => {
      const currentTime = e.target.currentTime //geting current time of song
      const duration = e.target.duration //getting total duration song
      let progressWidth = (currentTime / duration) * 100
      progressBar.style.width = `${progressWidth}%`;

      audio.addEventListener("loadeddata", () => {
        //update song total duration
        let audioDuration = audio.duration
        let totalMin = Math.floor(audioDuration / 60)
        let totalSec = Math.floor(audioDuration % 60)
        if (totalSec < 10) {
          totalSec = `0${totalSec}`
        }
        musicDuration.innerText = `${totalMin}:${totalSec}`
      })     
      //update playing song currentime
      let currentMin = Math.floor(currentTime / 60)
      let currentSec = Math.floor(currentTime % 60)
      if (currentSec < 10) {
        currentSec = `0${currentSec}`
      }
      musicCurrentTime.innerText = `${currentMin}:${currentSec}`

    })
    // xử lí tua song
    progressArea.addEventListener("click",(e) => {
      let progressWidthval = progressArea.clientWidth
      let clickedOffset = e.offsetX
      let songDuration = audio.duration

      audio.currentTime = (clickedOffset / progressWidthval) * songDuration
  })
    
   
    
  },
 
  loadCurrentSong: function() {
    
    songname.textContent = this.currentSong.name
    singer.textContent = this.currentSong.singer
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
    audio.src = this.currentSong.path
    // duration.textContent = this.currentSong.time
    
  },
  nextSong:function() {
    this.currentIndex++
    if(this.currentIndex >= this.songs.length) {
      this.currentIndex = 0
    }
    this.loadCurrentSong()

  },
  prevtSong:function() {
    this.currentIndex--
    if(this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1
    }
    this.loadCurrentSong()

  },
 
  playRandomSong: function() {
      let newIndex
    do {
      newIndex = Math.floor(Math.random() * this.songs.length)
    } while (newIndex === this.currentIndex)
    this.currentIndex = newIndex
    this.loadCurrentSong()
  },
  start: function() {
    this.defineProperties()
    this.render()
    // tải thông tin bài hát đầu tiên vào ui khi chạy
    this.loadCurrentSong()
    // xử lý
    this.handleEvents()
  }
}
app.start()

 