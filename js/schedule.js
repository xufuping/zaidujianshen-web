$(function(){$.ajax({type:"GET",url:"/blog/findSchedule/GroupSchedule",success:function(e){"1"===e.status&&$(".scheduleImg").attr("src",e.data.scheduleImg)},error:function(){console.log("Failed to obtain picture.")}})}),$(function(){$.ajax({type:"GET",url:"/blog/findSchedule/MembershipDues",success:function(e){"1"===e.status&&$(".dueImg").attr("src",e.data.scheduleImg)},error:function(){console.log("Failed to obtain picture.")}})});