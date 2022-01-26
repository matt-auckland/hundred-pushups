const exercises = [
  {
    week: 1,
    day: 1,
    rest: 60,
    exercises: {
      colOne: {
        preReq: null,
        reps: [2, 3, 2, 2, 3]
      },
      colTwo: {
        preReq: 6,
        reps: [6, 6, 4, 4, 5]
      },
      colThree: {
        preReq: 11,
        reps: [10, 12, 7, 7, 9]
      },
    },
  },
  {
    week: 1,
    day: 2,
    rest: 60,
    exercises: {
      colOne: {
        preReq: null,
        reps: [3, 4, 2, 3, 4]
      },
      colTwo: {
        preReq: 6,
        reps: [6, 8, 6, 6, 7]
      },
      colThree: {
        preReq: 11,
        reps: [10, 12, 8, 8, 12]
      },
    },
  },
  {
    week: 1,
    day: 3,
    rest: 60,
    exercises: {
      colOne: {
        preReq: null,
        reps: [4, 5, 4, 4, 5]
      },
      colTwo: {
        preReq: 6,
        reps: [8, 10, 7, 7, 10]
      },
      colThree: {
        preReq: 11,
        reps: [11, 15, 9, 9, 13]
      },
    },
  },
  {
    week: 2,
    day: 1,
    rest: 60,
    exercises: {
      colOne: {
        preReq: null,
        reps: [4, 6, 4, 4, 6]
      },
      colTwo: {
        preReq: 6,
        reps: [9, 11, 8, 8, 11]
      },
      colThree: {
        preReq: 11,
        reps: [14, 14, 10, 10, 15]
      },
    }
  },
  {
    week: 2,
    day: 2,
    rest: 90,
    exercises: {
      colOne: {
        preReq: null,
        reps: [5, 6, 4, 4, 7]
      },
      colTwo: {
        preReq: 6,
        reps: [10, 12, 9, 9, 13]
      },
      colThree: {
        preReq: 11,
        reps: [14, 16, 12, 12, 17]
      },
    },
  },

  {
    week: 2,
    day: 3,
    rest: 120, 
    exercises: {
      colOne: {
        preReq: null,
        reps: [5, 7, 5, 5, 8]
      },
      colTwo: {
        preReq: 6,
        reps: [12, 13, 10, 10, 15]
      },
      colThree: {
        preReq: 11,
        reps: [16, 17, 14, 14, 20]
      },
    },
  },
  {
    week: 3,
    day: 1,
    rest: 60,
    exercises:
    {
      colOne: {
        preReq: 16,
        reps: [10, 12, 7, 7, 9]
      },
      colTwo: {
        preReq: 21,
        reps: [12, 17, 13, 13, 17]
      },
      colThree: {
        preReq: 25,
        reps: [14, 18, 14, 14, 20]
      },
    },

  },
  {
    week: 3,
    day: 2,
    rest: 90,
    exercises: {
      colOne: {
        preReq: 16,
        reps: [10, 12, 8, 8, 12]
      },
      colTwo: {
        preReq: 21,
        reps: [14, 19, 14, 14, 19]
      },
      colThree: {
        preReq: 25,
        reps: [20, 25, 15, 15, 25]
      },
    },

  },
  {
    week: 3,
    day: 3,
    rest: 120,
    exercises: {
      colOne: {
        preReq: 16,
        reps: [11, 13, 9, 9, 13]
      },
      colTwo: {
        preReq: 21,
        reps: [16, 21, 15, 15, 21]
      },
      colThree: {
        preReq: 25,
        reps: [22, 30, 20, 20, 28]
      },
    },

  },
  {
    week: 4,
    rest: 60,
    day: 1,
    exercises: {
      colOne: {
        preReq: 16,
        reps: [12, 14, 11, 10, 16]
      },
      colTwo: {
        preReq: 21,
        reps: [18, 22, 16, 16, 25]
      },
      colThree: {
        preReq: 25,
        reps: [21, 25, 21, 21, 32]
      },
    },
  },


  {
    week: 4,
    rest: 90,
    day: 2,
    exercises: {
      colOne: {
        preReq: 16,
        reps: [14, 16, 12, 12, 18]
      },
      colTwo: {
        preReq: 21,
        reps: [20, 25, 20, 20, 28]
      },
      colThree: {
        preReq: 25,
        reps: [25, 29, 25, 25, 36]
      },
    },
  },


  {
    week: 4,
    day: 3,
    rest: 120,
    exercises: {
      colOne: {
        preReq: 16,
        reps: [16, 18, 13, 13, 20]
      },
      colTwo: {
        preReq: 21,
        reps: [23, 28, 23, 23, 33]
      },
      colThree: {
        preReq: 25,
        reps: [29, 33, 29, 29, 40]
      },
    },
  },


  {
    week: 5,
    day: 1,
    rest: 60,
    exercises: {
      colOne: {
        preReq: 31,
        reps: [17, 19, 15, 15, 20]
      },
      colTwo: {
        preReq: 36,
        reps: [28, 35, 25, 22, 35]
      },
      colThree: {
        preReq: 41,
        reps: [36, 40, 30, 24, 40]
      },
    },
  },


  {
    week: 5,
    day: 2,
    rest: 45,
    exercises: {
      colOne: {
        preReq: 31,
        reps: [10, 10, 13, 13, 10, 10, 9, 25]
      },
      colTwo: {
        preReq: 36,
        reps: [18, 18, 20, 20, 14, 14, 16, 40]
      },
      colThree: {
        preReq: 41,
        reps: [19, 19, 22, 22, 18, 18, 22, 45]
      },
    },
  },


  {
    week: 5,
    day: 3,
    rest: 45,
    exercises: {
      colOne: {
        preReq: 31,
        reps: [13, 13, 15, 15, 12, 12, 10, 30]
      },
      colTwo: {
        preReq: 36,
        reps: [18, 18, 20, 20, 17, 17, 20, 45]
      },
      colThree: {
        preReq: 41,
        reps: [20, 20, 24, 24, 20, 20, 22, 50]
      },
    },
  },


  {
    week: 6,
    day: 1,
    rest: 60,
    exercises: {
      colOne: {
        preReq: 46,
        reps: [25, 30, 20, 15, 40]
      },
      colTwo: {
        preReq: 51,
        reps: [40, 50, 25, 25, 50]
      },
      colThree: {
        preReq: 61,
        reps: [45, 55, 35, 30, 55]
      },
    },
  },


  {
    week: 6,
    day: 2,
    rest: 45,
    exercises: {
      colOne: {
        preReq: 46,
        reps: [14, 14, 15, 15, 14, 14, 10, 10, 44]
      },
      colTwo: {
        preReq: 51,
        reps: [20, 20, 23, 23, 20, 18, 18, 53]
      },
      colThree: {
        preReq: 61,
        reps: [22, 22, 30, 30, 24, 24, 18, 18, 58]
      },
    },
  },


  {
    week: 6,
    day: 3,
    rest: 45,
    exercises: {
      colOne: {
        preReq: 46,
        reps: [13, 13, 17, 17, 16, 16, 14, 14, 50]
      },
      colTwo: {
        preReq: 51,
        reps: [22, 22, 30, 30, 25, 25, 18, 18, 55]
      },
      colThree: {
        preReq: 61,
        reps: [26, 26, 33, 33, 26, 26, 22, 22, 60]
      },
    },
  },
]
export default exercises