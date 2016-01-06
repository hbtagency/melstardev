var win_width = window.innerWidth;
var numberOfFeed = 8;
var container_width = $('.container').width();

if(win_width < 1458){
    var diff = 1458 - win_width;
    var numOfNonShowing = Math.floor(diff/132);
    numberOfFeed -= numOfNonShowing;

    if(win_width < 825){
        numberOfFeed = 4;
    }
}
var u_id = parseInt('1011103740')
var feed = new Instafeed({
    //get: 'tagged',
    //tagName: 'harbourtownmelbourne',
    //clientId: '2127f0f462d3468ea4083d377a8e813d',
    template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
    get: 'user',
    userId: u_id,
    accessToken: '506128982.e5f9f03.a9ac8cbc214d4e8a9cea4ea805db52ff',
    sortBy: 'most-recent',
    limit: numberOfFeed
});
feed.run();
