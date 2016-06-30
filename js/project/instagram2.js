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
    limit: 8
});
feed.run();
