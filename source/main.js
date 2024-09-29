const module_spawn = require('spawn');
const module_creep = require('creep');

module.exports.loop = function () {
  for (const name in Game.spawns) {
    module_spawn.run(Game.spawns[name]);
  }

  for (const name in Game.creeps) {
    module_creep.run(Game.creeps[name]);
  }
};
