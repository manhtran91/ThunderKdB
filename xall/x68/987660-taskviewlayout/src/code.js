formTwo.addEventListener('click', function () {
          browser.myapi.setOne('calendarDisplayDeck', 'width', '50%');
          browser.myapi.setTwo('calendarContent', 'appendChild', 'taskContainer');
          browser.myapi.setThree('calendar-task-box', 'display', 'flex');
          browser.myapi.setFour('calendar-task-tree', 'height', '3%');
          browser.myapi.setFive('calendar-task-tree', 'flex', '1');
          browser.myapi.setSix('calendar-task-box', 'flexWrap', 'none');
          browser.myapi.setOne('task-addition-box', 'width', '100%');
          browser.myapi.setSeven('task-addition-box', 'height', '5%');
          browser.myapi.setSeven('calendar-task-details-container', 'height', '35%');
          browser.myapi.setSeven('calendar-task-tree', 'height', '55%');
          browser.myapi.setEight('calendar-task-tree', 'flex', '1');
          browser.myapi.setEight('calendar-task-details-container', 'flex', '1');
          browser.myapi.setTwo('calendar-task-box', 'appendChild', 'taskContainer');
          browser.myapi.setNine('calendar-task-tree', 'resize', 'vertical');
          browser.myapi.setTen('calendar-task-tree', 'overflow', 'auto'); 
          browser.myapi.setEleven('calendar-task-box', 'flexDirection', 'column');
});

formThree.addEventListener('click', function () {
          browser.myapi.setOne('calendarDisplayDeck', 'width', '50%');
          browser.myapi.setTwo('calendarContent', 'appendChild', 'taskContainer');
          browser.myapi.setThree('calendar-task-box', 'display', 'flex');
          browser.myapi.setFour('calendar-task-tree', 'height', '3%');
          browser.myapi.setThree('calendar-task-tree', 'display', 'internal');
          browser.myapi.setThirteen('calendar-task-tree', 'display', 'table-column');
          browser.myapi.setEleven('calendar-task-box', 'flexDirection', 'row');
          browser.myapi.setSix('calendar-task-box', 'flexWrap', 'wrap');
          browser.myapi.setOne('task-addition-box', 'width', '100%');
          browser.myapi.setTwo('calendar-task-box', 'appendChild', 'taskContainer');
          browser.myapi.setSeven('task-addition-box', 'height', '5%');
          browser.myapi.setSeven('calendar-task-details-container', 'height', '95%');
          browser.myapi.setSeven('calendar-task-tree', 'height', '95%');
          browser.myapi.setEight('calendar-task-tree', 'flex', '1');
          browser.myapi.setEight('calendar-task-details-container', 'flex', '1');
          browser.myapi.setNine('calendar-task-tree', 'resize', 'horizontal');
          browser.myapi.setTen('calendar-task-tree', 'overflow', 'auto');
});
