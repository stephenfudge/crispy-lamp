const { Tv } = require('../models');

const tvData = [{
    "tv_title": "Boy Meets World",
    "tv_season": 1,
    "tv_format": "DVD"
  }, {
    "tv_title": "Boy Meets World",
    "tv_season": 2,
    "tv_format": "DVD"
  },
  {
    "tv_title": "Boy Meets World",
    "tv_season": 3,
    "tv_format": "DVD"
  }, {
    "tv_title": "Boy Meets World",
    "tv_season": 4,
    "tv_format": "DVD"
  }, {
    "tv_title": "Boy Meets World",
    "tv_season": 5,
    "tv_format": "DVD"
  }, {
    "tv_title": "Boy Meets World",
    "tv_season": 6,
    "tv_format": "DVD"
  }, {
    "tv_title": "Boy Meets World",
    "tv_season": 7,
    "tv_format": "DVD"
  }, {
    "tv_title": "Chappelle Show",
    "tv_season": 1,
    "tv_format": "DVD"
  }, {
    "tv_title": "Chappelle Show",
    "tv_season": 2,
    "tv_format": "DVD"
  }, {
    "tv_title": "Chappelle Show",
    "tv_season": 3,
    "tv_format": "DVD"
  }, {
    "tv_title": "Entourage",
    "tv_season": 1,
    "tv_format": "DVD"
  }, {
    "tv_title": "Entourage",
    "tv_season": 2,
    "tv_format": "DVD"
  }, {
    "tv_title": "Entourage",
    "tv_season": 3,
    "tv_format": "DVD"
  }, {
    "tv_title": "Entourage",
    "tv_season": 4,
    "tv_format": "DVD"
  }, {
    "tv_title": "Entourage",
    "tv_season": 5,
    "tv_format": "DVD"
  }, {
    "tv_title": "Entourage",
    "tv_season": 6,
    "tv_format": "DVD"
  }, {
    "tv_title": "Entourage",
    "tv_season": 7,
    "tv_format": "DVD"
  }, {
    "tv_title": "Entourage",
    "tv_season": 8,
    "tv_format": "DVD"
  }, {
    "tv_title": "Franklin & Bash",
    "tv_season": 1,
    "tv_format": "DVD"
  }, {
    "tv_title": "Fresh Prince",
    "tv_season": 3,
    "tv_format": "DVD"
  }, {
    "tv_title": "Fresh Prince",
    "tv_season": 6,
    "tv_format": "DVD"
  }, {
    "tv_title": "How I Met Your Mother",
    "tv_season": 1,
    "tv_format": "DVD"
  }, {
    "tv_title": "How I Met Your Mother",
    "tv_season": 2,
    "tv_format": "DVD"
  }, {
    "tv_title": "How I Met Your Mother",
    "tv_season": 3,
    "tv_format": "DVD"
  }, {
    "tv_title": "How I Met Your Mother",
    "tv_season": 4,
    "tv_format": "DVD"
  }, {
    "tv_title": "How I Met Your Mother",
    "tv_season": 5,
    "tv_format": "DVD"
  }, {
    "tv_title": "How I Met Your Mother",
    "tv_season": 6,
    "tv_format": "DVD"
  }, {
    "tv_title": "How I Met Your Mother",
    "tv_season": 7,
    "tv_format": "DVD"
  }, {
    "tv_title": "How I Met Your Mother",
    "tv_season": 8,
    "tv_format": "DVD"
  }, {
    "tv_title": "How I Met Your Mother",
    "tv_season": 9,
    "tv_format": "DVD"
  }, {
    "tv_title": "Married With Children",
    "tv_season": 1,
    "tv_format": "DVD"
  }, {
    "tv_title": "Married With Children",
    "tv_season": 2,
    "tv_format": "DVD"
  }, {
    "tv_title": "Married With Children",
    "tv_season": 3,
    "tv_format": "DVD"
  }, {
    "tv_title": "Married With Children",
    "tv_season": 4,
    "tv_format": "DVD"
  }, {
    "tv_title": "Married With Children",
    "tv_season": 5,
    "tv_format": "DVD"
  }, {
    "tv_title": "Married With Children",
    "tv_season": 6,
    "tv_format": "DVD"
  }, {
    "tv_title": "Married With Children",
    "tv_season": 7,
    "tv_format": "DVD"
  }, {
    "tv_title": "Married With Children",
    "tv_season": 8,
    "tv_format": "DVD"
  }, {
    "tv_title": "Married With Children",
    "tv_season": 9,
    "tv_format": "DVD"
  }, {
    "tv_title": "Married With Children",
    "tv_season": 10,
    "tv_format": "DVD"
  }, {
    "tv_title": "Married With Children",
    "tv_season": 11,
    "tv_format": "DVD"
  }, {
    "tv_title": "Metal Evolution",
    "tv_season": 1,
    "tv_format": "DVD"
  }, {
    "tv_title": "NCIS",
    "tv_season": 1,
    "tv_format": "DVD"
  }, {
    "tv_title": "NCIS",
    "tv_season": 2,
    "tv_format": "DVD"
  }, {
    "tv_title": "NCIS",
    "tv_season": 3,
    "tv_format": "DVD"
  }, {
    "tv_title": "NCIS",
    "tv_season": 4,
    "tv_format": "DVD"
  }, {
    "tv_title": "NCIS",
    "tv_season": 5,
    "tv_format": "DVD"
  }, {
    "tv_title": "NCIS",
    "tv_season": 6,
    "tv_format": "DVD"
  }, {
    "tv_title": "NCIS",
    "tv_season": 7,
    "tv_format": "DVD"
  }, {
    "tv_title": "NCIS",
    "tv_season": 8,
    "tv_format": "DVD"
  }, {
    "tv_title": "NCIS",
    "tv_season": 9,
    "tv_format": "DVD"
  }, {
    "tv_title": "NCIS",
    "tv_season": 10,
    "tv_format": "DVD"
  }, {
    "tv_title": "NCIS",
    "tv_season": 11,
    "tv_format": "DVD"
  }, {
    "tv_title": "NCIS",
    "tv_season": 12,
    "tv_format": "DVD"
  }, {
    "tv_title": "NCIS",
    "tv_season": 13,
    "tv_format": "DVD"
  }, {
    "tv_title": "NCIS",
    "tv_season": 14,
    "tv_format": "DVD"
  }, {
    "tv_title": "Numb3rs",
    "tv_season": 1,
    "tv_format": "DVD"
  }, {
    "tv_title": "Numb3rs",
    "tv_season": 2,
    "tv_format": "DVD"
  }, {
    "tv_title": "Numb3rs",
    "tv_season": 3,
    "tv_format": "DVD"
  }, {
    "tv_title": "Numb3rs",
    "tv_season": 4,
    "tv_format": "DVD"
  }, {
    "tv_title": "Numb3rs",
    "tv_season": 5,
    "tv_format": "DVD"
  }, {
    "tv_title": "Numb3rs",
    "tv_season": 6,
    "tv_format": "DVD"
  }, {
    "tv_title": "Rookie Blue",
    "tv_season": 1,
    "tv_format": "DVD"
  }, {
    "tv_title": "Rookie Blue",
    "tv_season": 2,
    "tv_format": "DVD"
  }, {
    "tv_title": "Rookie Blue",
    "tv_season": 3,
    "tv_format": "DVD"
  }, {
    "tv_title": "Rookie Blue",
    "tv_season": 4,
    "tv_format": "DVD"
  }, {
    "tv_title": "Rookie Blue",
    "tv_season": 5,
    "tv_format": "DVD"
  }, {
    "tv_title": "Saved By The Bell",
    "tv_season": 1,
    "tv_format": "DVD"
  }, {
    "tv_title": "Saved By The Bell",
    "tv_season": 2,
    "tv_format": "DVD"
  }, {
    "tv_title": "Saved By The Bell",
    "tv_season": 3,
    "tv_format": "DVD"
  }, {
    "tv_title": "Saved By The Bell",
    "tv_season": 4,
    "tv_format": "DVD"
  }, {
    "tv_title": "Silicon Valley",
    "tv_season": 1,
    "tv_format": "DVD"
  }, {
    "tv_title": "Silicon Valley",
    "tv_season": 2,
    "tv_format": "DVD"
  }, {
    "tv_title": "Silicon Valley",
    "tv_season": 3,
    "tv_format": "DVD"
  }, {
    "tv_title": "Silicon Valley",
    "tv_season": 4,
    "tv_format": "DVD"
  }, {
    "tv_title": "Two Guys And A Girl",
    "tv_season": 1,
    "tv_format": "DVD"
  }, {
    "tv_title": "Two Guys And A Girl",
    "tv_season": 2,
    "tv_format": "DVD"
  }, {
    "tv_title": "Two Guys And A Girl",
    "tv_season": 3,
    "tv_format": "DVD"
  }
]

const seedTv = () => Tv.bulkCreate(tvData);

module.exports = seedTv;