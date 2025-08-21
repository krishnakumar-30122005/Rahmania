
    {
        id: '2',
        songName: `Omana Penne <br>
        <div class="subtitle">Benny Dayal</div>`,
        poster: "image/img2.jpeg"



    },
    {
        id: '3',
        songName: `Hosanna <br>
        <div class="subtitle">Vijay Prakash</div>`,
        poster: "image/img3.jpeg"



    },
    {
        id: '4',
        songName: `Mannnipaaya <br>
        <div class="subtitle">A.R.Rahman</div>`,
        poster: "image/img4.jpeg"



    },
    {
        id: '5',
        songName: `Aaoromale <br>
        <div class="subtitle">Alphones joseph</div>`,
        poster: "image/img5.jpeg"



    },
    {
        id: '6',
        songName: `Uppukarauvadu <br>
        <div class="subtitle">Shanker Mahadev</div>`,
        poster: "image/img6.jpeg"



    },
    {
        id: '7',
        songName: `Kurruku Siruthavalae <br>
        <div class="subtitle">Hariharan</div>`,
        poster: "image/img7.jpeg"



    },
    {
        id: '8',
        songName: `Valayapathi <br>
        <div class="subtitle">Naresh Iyer</div>`,
        poster: "image/img8.jpeg"



    },
    {
        id: '9',
        songName: `Ella Pugazhum <br>
        <div class="subtitle">A.R.Rahman</div>`,
        poster: "image/img9.jpeg"



    },
    {
        id:'10',
        songName: `Avalum Naanum <br>
        <div class="subtitle">Vijay Yesudas</div>`,
        poster: "image/img10.jpeg"



    },
    {
        id: '11',
        songName: `Avalum Naanum <br>
        <div class="subtitle">Vijay Yesudas</div>`,
        poster: "image/img11.jpeg"



    },
    {
        id: '12',
        songName: `Rasaali<br>
        <div class="subtitle">Sathya Prakash</div>`,
        poster: "image/img12.jpeg"



    },
    {
        id: '13',
        songName: `Raasali<br>
        <div class="subtitle">Sathya Prakash</div>`,
        poster: "image/img13.jpeg"



    },
    {
        id: '14',
        songName: `Endrendrum Punnagai <br>
        <div class="subtitle">Praveen</div>`,
        poster: "image/img1.jpeg"



    },
    {
        id: '15',
        songName: `Kadhal Punnagai <br>
        <div class="subtitle">S.P.B</div>`,
        poster: "image/img2.jpeg"



    },
    {
        id: '16',
        songName: `Aathangarai Maramae <br>
        <div class="subtitle">Mano</div>`,
        poster: "image/img3.jpeg"



    },
    {
        id: '17',
        songName: `ELay Keechan <br>
        <div class="subtitle">A.R.Rahman</div>`,
        poster: "image/img4.jpeg"



    },
    {
        id: '18',
        songName: `Mayilliragae<br>
        <div class="subtitle">Naresh Iyer</div>`,
        poster: "image/img5.jpeg"



    },
    {
        id: '19',
        songName: `sakkara<br>
        <div class="subtitle">S.P.B</div>`,
        poster: "image/img6.jpeg"



    },
    
]

Array.from(document.getElementsByClassName('songItems')).forEach((e, i) =>{
         e.getElementsByTagName('img')[0].src = songs[i].poster;
         e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
}
);


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');
masterPlay.addEventListener('click', ()=> {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }

});
const makeALLplays =() =>{
    Array.from(document.getElementsByClassName('playListplay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
        
    })
}
const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItems')).forEach((el) => {
        el.style.background = 'rgb(105,105,105,0)';
    })
}


let index=0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playlistplay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
       //console.log(index);
       music.src = `audio/${index}.mp3`;
     poster_master_play.src = `image/${index}.jpeg`;
       music.play();
       masterPlay.classList.remove('bi-play-fill');
       masterPlay.classList.add('bi-pause-fill');

       let songTitles = songs.filter((els)  =>{
        return els.id == index;
       });
       

       songTitles.forEach(elss =>{
         let {songName,poster}= elss;
         title.innerHTML =songName;
         poster.src =poster;
       });
       makeAllBackground();
       Array.from(document.getElementsByClassName('songItems'))[index].style.background="gb(105,105,105,1)";
       makeALLplays();
       el.target.classList.remove('bi-play-circle-fill');
       el.target.classList.add('bi-pause-circle-fill')
    })
})

let currentStart = document.getElementById('currentStart');
let currentend = document.getElementById('currentend');

music.addEventListener('timeupdate', ()=>{
    let music_curr =music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    currentStart.innerText=`${min}:${sec}`;

})






let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];



pop_song_right.addEventListener('click', () =>{
    pop_song.scrollLeft+=330;
});
pop_song_left.addEventListener('click', () =>{
    pop_song.scrollLeft-=330;
});
let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];



pop_art_right.addEventListener('click', () =>{
    item.scrollLeft+=330;
});
pop_art_left.addEventListener('click', () =>{
    item.scrollLeft-=330;
});
