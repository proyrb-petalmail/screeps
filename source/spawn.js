module.exports = {
  run: function (spawn) {
    if (undefined == spawn) {
      console.log('argument of the run function is undefined in spawn module');
      return;
    }

    if (false == spawn.isActive()) {
      console.log(spawn.name + ' is not active');
      return;
    }

    if (null != spawn.spawning) {
      console.log(spawn.name + ' is spawning');
      return;
    }

    if (spawn.store[RESOURCE_ENERGY] < 200) {
      console.log(spawn.name + ' has not enough energy');
      return;
    }

    spawn.spawnCreep([MOVE, WORK, CARRY], spawn.room.name + '.harvester.' + Game.time, {
      memory: {
        source: spawn.room.find(FIND_SOURCES_ACTIVE)[0].id,
        target: spawn.id
      },
      directions: [TOP, TOP_LEFT, LEFT, RIGHT]
    });
  }
};
