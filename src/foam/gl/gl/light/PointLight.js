var Light = require('./Light');

function PointLight(id)
{
    Light.apply(this,arguments);
}

PointLight.prototype = Object.create(Light.prototype);

module.exports = PointLight;