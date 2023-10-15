require('zone.js');
const azone = Zone.current.fork({
    name: 'nzone',
    traceId: ''
});
const mw = (req, res, next) => {
    azone.fork({
        name: 'nzone mid',
        properties: {
            traceId: Date.now()
        }
    }).run(() => {
        console.log('start');
        next();
        console.log('end');
    });
}
module.exports = { azone, mw };