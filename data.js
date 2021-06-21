"use strict";

const myData = [
  {
    image: "https://placekitten.com/600/400",
    caption:
      "Duis in facilisis lectus. Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.",
    type: "image",
    source_type: "facebook",
    source_link: "https://www.facebook.com/EmbedSocial/",
    date: "2018-03-12 03:00:00",
    likes: "123",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/100/100",
  },
  {
    image: "https://placekitten.com/600/410",
    caption:
      "Quisque metus nisi, consequat et molestie eget, facilisis ac odio. Nam lorem libero, efficitur ac velit at, egestas tempor arcu. Nullam pharetra ex eget orci lobortis malesuada. Maecenas eget porta felis. Aliquam porttitor, nibh nec ullamcorper fermentum, eros velit lobortis justo, pretium consectetur turpis enim ut nunc. Fusce convallis, ex ut ultrices sodales, ante quam venenatis arcu, vitae mollis magna urna vel eros. Aliquam a sapien nisi. Nullam convallis malesuada suscipit. ",
    type: "image",
    source_type: "instagram",
    source_link: "https://instagram.com/embedsocial/",
    date: "2019-01-12 03:00:00",
    likes: "0",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/150/100",
  },
  {
    image: "https://placekitten.com/600/420",
    caption: "",
    type: "image",
    source_type: "facebook",
    source_link: "https://instagram.com/embedsocial/",
    date: "2017-01-21 03:00:00",
    likes: "9866555",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/100/150",
  },
  {
    image: "https://placekitten.com/600/430",
    caption:
      "Etiam eu blandit nisi. Aliquam rutrum faucibus mauris, sed egestas odio viverra at. In elementum sit amet sapien vitae bibendum.",
    type: "image",
    source_type: "facebook",
    source_link: "https://www.facebook.com/EmbedSocial/",
    date: "2019-12-12 03:00:00",
    likes: "2",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/120/120",
  },
  {
    image: "https://placekitten.com/600/440",
    caption:
      "Vivamus a sem sit amet nisi pretium pretium. Curabitur blandit ut lectus non bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris leo odio, consectetur a lorem vitae, aliquet placerat orci. Phasellus varius ante sit amet quam mollis, eu efficitur tortor blandit.",
    type: "image",
    source_type: "facebook",
    source_link: "https://instagram.com/embedsocial/",
    date: "2018-04-12 03:00:00",
    likes: "12343",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/50/50",
  },
  {
    image: "https://placekitten.com/600/440",
    caption:
      "Duis in facilisis lectus. Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.",
    type: "image",
    source_type: "facebook",
    source_link: "https://www.facebook.com/EmbedSocial/",
    date: "2019-12-12 03:00:00",
    likes: "123",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/101/101",
  },
  {
    image: "https://placekitten.com/800/400",
    caption:
      "Duis in facilisis lectus. Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.",
    type: "image",
    source_type: "facebook",
    source_link: "https://www.facebook.com/EmbedSocial/",
    date: "2019-12-12 03:00:00",
    likes: "12",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/150/120",
  },
  {
    image: "https://placekitten.com/600/500",
    caption:
      "Vivamus a sem sit amet nisi pretium pretium. Curabitur blandit ut lectus non bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris leo odio, consectetur a lorem vitae, aliquet placerat orci. Phasellus varius ante sit amet quam mollis, eu efficitur tortor blandit.",
    type: "image",
    source_type: "facebook",
    source_link: "https://instagram.com/embedsocial/",
    date: "2017-12-12 03:00:00",
    likes: "23",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/140/140",
  },
  {
    image: "https://placekitten.com/700/400",
    caption:
      "Pellentesque lacinia volutpat turpis non fermentum. Cras at pellentesque augue. Aliquam eget metus sit amet turpis consectetur posuere.",
    type: "image",
    source_type: "facebook",
    source_link: "https://www.facebook.com/EmbedSocial/",
    date: "2017-12-08 03:00:00",
    likes: "0",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/100/100",
  },
  {
    image: "https://placekitten.com/700/500",
    caption:
      "Duis in facilisis lectus. Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.",
    type: "image",
    source_type: "facebook",
    source_link: "https://www.facebook.com/EmbedSocial/",
    date: "2019-02-12 03:00:00",
    likes: "0",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/102/102",
  },
  {
    image: "https://placekitten.com/800/600",
    caption:
      "Aliquam odio libero, malesuada et iaculis a, facilisis bibendum dolor. Vivamus ultricies congue arcu eu porttitor. Integer libero tortor, volutpat a purus id, mattis tristique tortor. ",
    type: "image",
    source_type: "facebook",
    source_link: "https://www.facebook.com/EmbedSocial/",
    date: "2019-12-12 03:00:00",
    likes: "2",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/103/100",
  },
  {
    image: "https://placekitten.com/700/600",
    caption: "Duis in facilisis lectus.",
    type: "image",
    source_type: "facebook",
    source_link: "https://instagram.com/embedsocial/",
    date: "2020-12-12 03:00:00",
    likes: "1",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/40/100",
  },
  {
    image: "https://placekitten.com/1600/1400",
    caption:
      "Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.",
    type: "image",
    source_type: "facebook",
    source_link: "https://www.facebook.com/EmbedSocial/",
    date: "2019-12-15 03:00:00",
    likes: "2324",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/80/100",
  },
  {
    image: "https://placekitten.com/1600/400",
    caption:
      "Aliquam odio libero, malesuada et iaculis a, facilisis bibendum dolor.",
    type: "image",
    source_type: "facebook",
    source_link: "https://www.facebook.com/EmbedSocial/",
    date: "2019-10-12 03:00:00",
    likes: "1223",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/80/80",
  },
  {
    image: "https://placekitten.com/2000/4000",
    caption:
      "Quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.",
    type: "image",
    source_type: "facebook",
    source_link: "https://instagram.com/embedsocial/",
    date: "2016-12-12 03:00:00",
    likes: "12223",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/110/110",
  },
  {
    image: "https://placekitten.com/900/600",
    caption:
      " Suspendisse finibus lorem nibh, facilisis ullamcorper nunc consequat sit amet. Curabitur ultricies magna ante, ac eleifend lorem auctor porta. Nullam volutpat aliquet lorem, et posuere ex aliquet eu. Quisque elementum sem mauris, a mattis est scelerisque vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut quis massa eget ligula euismod sagittis id congue quam. Duis vestibulum eros sed tincidunt rutrum. Pellentesque in malesuada velit.",
    type: "image",
    source_type: "facebook",
    source_link: "https://www.facebook.com/EmbedSocial/",
    date: "2017-12-12 03:00:00",
    likes: "0",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/110/100",
  },
  {
    image: "https://placekitten.com/600/410",
    caption:
      "Quisque metus nisi, consequat et molestie eget, facilisis ac odio. Nam lorem libero, efficitur ac velit at, egestas tempor arcu. Nullam pharetra ex eget orci lobortis malesuada. Maecenas eget porta felis. Aliquam porttitor, nibh nec ullamcorper fermentum, eros velit lobortis justo, pretium consectetur turpis enim ut nunc. Fusce convallis, ex ut ultrices sodales, ante quam venenatis arcu, vitae mollis magna urna vel eros. Aliquam a sapien nisi. Nullam convallis malesuada suscipit. ",
    type: "image",
    source_type: "instagram",
    source_link: "https://instagram.com/embedsocial/",
    date: "2019-01-12 03:00:00",
    likes: "0",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/150/100",
  },
  {
    image: "https://placekitten.com/600/420",
    caption: "",
    type: "image",
    source_type: "facebook",
    source_link: "https://instagram.com/embedsocial/",
    date: "2017-01-21 03:00:00",
    likes: "9866555",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/100/150",
  },
  {
    image: "https://placekitten.com/600/430",
    caption:
      "Etiam eu blandit nisi. Aliquam rutrum faucibus mauris, sed egestas odio viverra at. In elementum sit amet sapien vitae bibendum.",
    type: "image",
    source_type: "facebook",
    source_link: "https://www.facebook.com/EmbedSocial/",
    date: "2019-12-12 03:00:00",
    likes: "2",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/120/120",
  },
  {
    image: "https://placekitten.com/600/440",
    caption:
      "Vivamus a sem sit amet nisi pretium pretium. Curabitur blandit ut lectus non bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris leo odio, consectetur a lorem vitae, aliquet placerat orci. Phasellus varius ante sit amet quam mollis, eu efficitur tortor blandit.",
    type: "image",
    source_type: "facebook",
    source_link: "https://instagram.com/embedsocial/",
    date: "2018-04-12 03:00:00",
    likes: "12343",
    name: "John Smith",
    profile_image: "https://placekitten.com/g/50/50",
  },
];

const months = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "June",
  7: "July",
  8: "Aug",
  9: "Sept",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

let shownItems = [];

loadMore();

function loadMore() {
  renderItems(myData.splice(0, 4));

  if (!myData.length) {
    const btn = document.getElementById("load-more");
    btn.remove();
  }
}

function renderItems(newItems) {
  newItems.forEach((item) => {
    const widget = document.createElement("div");
    widget.classList.add("main-container", "col-sm-12", "col-md-6", "col-lg-3");

    widget.innerHTML = `
      <div class="widget-container">
        <div class="widget">
          <div class="widget-header">
            <img class="profile_image" src="${item.profile_image}" />
            <div class="user-name">
              <div class="name">${item.name}</div>
              <div class="date">
                ${item.date.split(" ")[0].split("-")[2]} 
                ${months[+item.date.split(" ")[0].split("-")[1]]} 
                ${item.date.split(" ")[0].split("-")[0]} 
              </div>
            </div>
            <div class="social-icon">
              <img src="${
                item.source_type === "facebook"
                  ? "./facebook.svg"
                  : "./instagram-logo.svg"
              }" class="social-icon-img"/>
            </div>
          </div>
  
          <div class = "widget-content">
            <div class ="content-img-container">
              <img src="${item.image}" class="content-img">
            </div>
            <div class="content-text">
              <a href="#Lorem">#Lorem</a> ${item.caption}
            </div>
            <div class="line"></div>
            
          </div>
  
          <div class = "likes-container">
              <img src="heart.svg"> <div class="likes">${item.likes}</div>
          </div>
          </div>
             
        </div>
      </div>
    `;

    document.getElementById("data-loader").append(widget);
  });
}
