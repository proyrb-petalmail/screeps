module.exports = {
  run: function (creep) {
    if (creep.spawning) return;

    if (0 == creep.ticksToLive) {
      delete creep.memory;
      return;
    }

    if (0 == creep.store[RESOURCE_ENERGY]) {
      switch (creep.harvest(Game.getObjectById(creep.memory.source))) {
        case OK: {
          break;
        }
        case ERR_NOT_IN_RANGE: {
          switch (
            creep.moveTo(Game.getObjectById(creep.memory.source), {
              visualizePathStyle: {
                fill: 'transparent',
                stroke: '#fff',
                lineStyle: 'dashed',
                strokeWidth: 0.15,
                opacity: 0.1
              },
              range: 1
            })
          ) {
            case OK: {
              break;
            }
            case ERR_NOT_FOUND: {
              console.log('[' + creep.name + '] ' + 'path is not found');
              break;
            }
            default: {
              console.log('[' + creep.name + '] ' + 'happened an error on moving by path');
              break;
            }
          }
          break;
        }
        default: {
          console.log('[' + creep.name + '] ' + 'happened an error on harvesting');
          break;
        }
      }
    } else if (creep.store[RESOURCE_ENERGY] == creep.store.getCapacity(RESOURCE_ENERGY)) {
      switch (creep.harvest(Game.getObjectById(creep.memory.source))) {
        case OK: {
          break;
        }
        case ERR_NOT_IN_RANGE: {
          switch (
            creep.moveTo(Game.getObjectById(creep.memory.source), {
              visualizePathStyle: {
                fill: 'transparent',
                stroke: '#fff',
                lineStyle: 'dashed',
                strokeWidth: 0.15,
                opacity: 0.1
              },
              range: 1
            })
          ) {
            case OK: {
              break;
            }
            case ERR_NOT_FOUND: {
              console.log('[' + creep.name + '] ' + 'path is not found');
              break;
            }
            default: {
              console.log('[' + creep.name + '] ' + 'happened an error on moving by path');
              break;
            }
          }
          break;
        }
        default: {
          console.log('[' + creep.name + '] ' + 'happened an error on harvesting');
          break;
        }
      }
    } else {
      switch (creep.harvest(Game.getObjectById(creep.memory.source))) {
        case OK: {
          break;
        }
        case ERR_NOT_IN_RANGE: {
          console.log('[' + creep.name + '] ' + 'is out of range');
          // switch (
          //   creep.moveTo(Game.getObjectById(creep.memory.source), {
          //     noPathFinding: true,
          //     visualizePathStyle: { fill: 'transparent', stroke: '#fff', lineStyle: 'dashed', strokeWidth: 0.15, opacity: 0.1 },
          //     range: 1
          //   })
          // ) {
          //   case OK: {
          //     console.log('[' + creep.name + '] ' + 'ok');
          //     break;
          //   }
          //   case ERR_NOT_FOUND: {
          //     console.log('[' + creep.name + '] ' + 'path is not found');
          //     break;
          //   }
          //   default: {
          //     console.log('[' + creep.name + '] ' + 'happened an error on moving by path');
          //     break;
          //   }
          // }
          break;
        }
        default: {
          console.log('[' + creep.name + '] ' + 'happened an error on harvesting');
          break;
        }
      }
    }
    return;
  }
};
