(function(){

  var map = L.map('map', {
    center: [39.9522, -75.1639],
    zoom: 14
  });
  var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20,
    ext: 'png'
  }).addTo(map);

  /* =====================

  # Lab 2, Part 4 — (Optional, stretch goal)

  ## Introduction

    You've already seen this file organized and refactored. In this lab, you will
    try to refactor this code to be cleaner and clearer - you should use the
    utilities and functions provided by underscore.js. Eliminate loops where possible.

  ===================== */

  
  schools[i].ZIPCODE = normalized_zip;
     }

     //Refactoring the code to be used
     var letclean = (obj)=>{
       if (typeof obj.ZIPCODE === 'string'){
        obj.ZIPCODE = _.first(parseInt(obj.ZIPCODE.split(' ')));}
     }

     _.each(schools,letclean)


    // Check out the use of typeof here — this was not a contrived example schools[i].HAS_HIGH_SCHOOL = schools[i].GRADE_LEVEL.toUpperCase().indexOf('HIGH') >= 0;
    }
  }

  schools[i].HAS_HIGH_SCHOOL = schools[i].GRADE_LEVEL.toUpperCase().indexOf('HIGH') >= 0;
 }
}
    // Someone actually messed up the data entry
  if(_.isNumber(schools.GRADE_ORG)){
      schools.HAS_KINDERGARTEN = schools.GRADE_LEVEL < 1;
      schools.HAS_ELEMENTARY = 1 < schools.GRADE_LEVEL < 6;
      schools.HAS_MIDDLE_SCHOOL = 5 < schools.GRADE_LEVEL < 9;
      schools.HAS_HIGH_SCHOOL = 8 < schools.GRADE_LEVEL < 13;
    } else {// otherwise (in case of string)
      schools.HAS_KINDERGARTEN = schools.GRADE_LEVEL.toUpperCase().indexOf('K') >= 0;
      schools.HAS_ELEMENTARY = schools.GRADE_LEVEL.toUpperCase().indexOf('ELEM') >= 0;
      schools.HAS_MIDDLE_SCHOOL = schools.GRADE_LEVEL.toUpperCase().indexOf('MID') >= 0;
      schools.HAS_HIGH_SCHOOL = schools.GRADE_LEVEL.toUpperCase().indexOf('HIGH') >= 0;
    }

  // filter data and refactoring the code:
  _.each(schools, function(schools) {
    isOpen = schools.ACTIVE.toUpperCase() == 'OPEN';
    isPublic = (schools.TYPE.toUpperCase() !== 'CHARTER' ||
                schools.TYPE.toUpperCase() !== 'PRIVATE');
    isSchool = (schools.HAS_KINDERGARTEN ||
                schools.HAS_ELEMENTARY ||
                schools.HAS_MIDDLE_SCHOOL ||
                schools.HAS_HIGH_SCHOOL);
    meetsMinimumEnrollment = schools.ENROLLMENT > minEnrollment;
    meetsZipCondition = acceptedZipcodes.indexOf(schools.ZIPCODE) >= 0;
    filter_condition = (isOpen &&
                        isSchool &&
                        meetsMinimumEnrollment &&
                        !meetsZipCondition)

    if (filter_condition) {
      filtered_data.push(schools[i]);
    } else {
      filtered_out.push(schools[i]);
    }
  }
  })
  console.log('Included:', filtered_data.length);
  console.log('Excluded:', filtered_out.length);

  // Main Loop that I will be using

  // main loop
 var color;
 for (var i = 0; i < filtered_data.length - 1; i++) {
               filtered_data[i].TYPE.toUpperCase() !== 'PRIVATE');
   meetsMinimumEnrollment = filtered_data[i].ENROLLMENT > minEnrollment;


    // Constructing the styling  options for our map
    if (filtered_data[i].HAS_HIGH_SCHOOL){
      color = '#0000FF';
    } else if (filtered_data[i].HAS_MIDDLE_SCHOOL) {
      color = '#00FF00';
    } else {
      color = '##FF0000';
    }
    // The style options
    _.each(filtered_data,function(main){
      isOpen = main.ACTIVE.toUpperCase() == 'OPEN';
      isPublic = (main.TYPE.toUpperCase() !== 'CHARTER' ||
                  main.TYPE.toUpperCase() !== 'PRIVATE');
      meetsMinimumEnrollment = main.ENROLLMENT > minEnrollment;
      if (main.HAS_HIGH_SCHOOL){
        color = '#0000FF';
      } else if (main.HAS_MIDDLE_SCHOOL) {
        color = '#00FF00'
      } else {
        color = '##FF0000';
      }
    })
  }

})();
