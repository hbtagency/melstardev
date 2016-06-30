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
    accessToken: '1011103740.1677ed0.f49eb4fc94264fa3b6991bf15400ab8f',
    sortBy: 'most-recent',
    limit: numberOfFeed
});
feed.run();
