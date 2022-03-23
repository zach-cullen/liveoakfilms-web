const film_collections = [
  {
    id: 1,
    title: "Kelsi & Kristian",
    videoCover: "https://liveoak-upload-provider.s3.us-east-2.amazonaws.com/medium_kelsi_kristian_cover_584d91997c.jpg",
    videoUrl: "url",
    venue: "Blue Hill at Stone Barns",
    quote: "I believe — in a way that makes me feel both grounded and free — that I love you, and that I always will.",
  },
  {
    id: 2,
    title: "KK & Andrew",
    videoCover: "https://liveoak-upload-provider.s3.us-east-2.amazonaws.com/medium_kk_andrew_ea6b7470ff.jpg",
    videoUrl: "url",
    venue: "Fort Adams",
    quote: "I mentioned one time that KK would be the perfect bride... and she is. It’s pretty remarkable.",
  },
  {
    id: 3,
    title: "Maggie & Alex",
    videoCover: "https://liveoak-upload-provider.s3.us-east-2.amazonaws.com/medium_Navin_Cover_21_2_057c5670db.jpg",
    videoUrl: "url",
    venue: "Hasbrouck House",
    quote: "You make it so easy to love you. You’re my best friend, the love of my life and my forever person.",
  },
  {
    id: 4,
    title: "May & Kevin",
    videoCover: "https://liveoak-upload-provider.s3.us-east-2.amazonaws.com/medium_mk_2_4_28859ad4ab.jpg",
    videoUrl: "url",
    venue: "Cornell University",
    quote: "I still remember our second date... Somehow even then I saw only you and nothing else mattered.",
  },
  {
    id: 5,
    title: "Katie & Tom",
    videoCover: "https://liveoak-upload-provider.s3.us-east-2.amazonaws.com/medium_katie_tom_cover_0703f45de1.jpg",
    videoUrl: "url",
    venue: "Blithewold Mansion",
    quote: "Even on the days when I have struggled, when the future seemed uncertain— not once did I have to walk alone.",
  },
  {
    id: 6,
    title: "Ali & Matt",
    videoCover: "https://liveoak-upload-provider.s3.us-east-2.amazonaws.com/medium_Mersky_Cover_9_2_da7b723674.jpg",
    videoUrl: "url",
    venue: "Genesee Valley Club",
    quote: "I promise to love you no matter what. I cannot wait to spend the rest of my days with you as my forever teammate.",
  },
  {
    id: 7,
    title: "Shannon & Jason",
    videoCover: "https://liveoak-upload-provider.s3.us-east-2.amazonaws.com/medium_mirabito_cover_7914cd2d5c.jpg",
    videoUrl: "url",
    venue: "Skaneateles Country Club",
    quote: "From the very first day it was clear — we were meant to be forever.",
  },
]

const reviews = [
  {
    id: 1,
    name: "Emma D.",
    image: "https://liveoak-upload-provider.s3.us-east-2.amazonaws.com/emma_review_00f1071b15.png", // array
    review: "You got us- every piece of us. I’m so thankful our lives crossed paths- you have an unbelievable talent and we’re so grateful you chose us to share it with. Thank you, thank you, thank you!!!",
  },
  {
    id: 2,
    name: "Katie C.",
    image: "https://liveoak-upload-provider.s3.us-east-2.amazonaws.com/katie_review_7baa1ee7b1.png", // array
    review: "It is PERFECT! We really will enjoy it every time we watch (and we’ve watched it so much already). So excited to share with our family and friends. You captured our day so perfectly - we really could not be happier or more grateful.",
  },
  {
    id: 1,
    name: "May P.",
    image: "https://liveoak-upload-provider.s3.us-east-2.amazonaws.com/may_review_6c675171e0.png", // array
    review: "Thank you for the most beautiful and perfect capture of our wedding day... you helped make us feel so special and now we have the ability to relive that any time we need.",
  },
]

const team_members = [
  {
    name: "Zach Cullen",
    title: "Filmmaker, Founder",
    image: "https://liveoak-upload-provider.s3.us-east-2.amazonaws.com/zach_profile_ec83ae4f24.png",
    bio: "Zach captures your day to be viewed with your family and loved ones tomorrow, on your first anniversary, and someday after 25 years of marriage. His hope is that as your family grows and changes, you will be able to relive these moments and share them as you create your legacy. Outside of work you'll find him hiking in the Blue Ridge with his wife Staci and their corgi, Roo."
  }
]

export const homeContent = {
  film_collections: [
    film_collections[0],
    film_collections[1],
    film_collections[2]
  ],
  reviews: reviews,
}

export const portfolioContent = {
  film_collections: film_collections
}

export const aboutContent = {
  team_members: team_members
}
