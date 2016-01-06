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
    limit: 8
});
feed.run();
