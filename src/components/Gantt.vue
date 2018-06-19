<template>
  <div ref="gantt"></div>
</template>

<script>
// import AccountService from '@/services/AccountService'
import TaskService from '@/services/TaskService'
/* eslint-disable */
import 'dhtmlx-gantt'

export default {
  name: 'gantt',
  data () {
    return {
      timer: 5000
    }
  },
  props: {
    tasks: {
      type: Object,
      default () {
        return {data: [], links: []}
      }
    },
    instance: ''
  },

  methods: {
    PostCard (task) {
      var vue = this
      this.firebaseApp.auth().currentUser.getIdToken(false).then(function (idToken) {
        task.token = idToken
        TaskService.PutTask(task).then((res) => {
          console.log(res)
        })
      })
    },
    $_initGanttEvents: function () {
      if(gantt.$_eventsInitialized)
        return;
      gantt.attachEvent('onTaskSelected', (id) => {
        let task = gantt.getTask(id)
        this.$emit('task-selected', task)
      })

      gantt.attachEvent('onAfterTaskAdd', (id, task) => {
        this.$emit('task-updated', id, 'inserted', task)
        task.progress = task.progress || 0
        if(gantt.getSelectedId() == id) {
          this.$emit('task-selected', task)
        }
      })

      gantt.attachEvent('onAfterTaskUpdate', (id, task) => {
        this.$emit('task-updated', id, 'updated', task)
        this.PostCard(task)
      })

      gantt.attachEvent('onAfterTaskDelete', (id) => {
        this.$emit('task-updated', id, 'deleted')
        if(!gantt.getSelectedId()) {
          this.$emit('task-selected', null)
        }
      })

      gantt.attachEvent('onAfterLinkAdd', (id, link) => {
        this.$emit('link-updated', id, 'inserted', link)
      })

      gantt.attachEvent('refreshGant', () => {
        gantt.refreshData();
      })

      gantt.attachEvent('onAfterLinkUpdate', (id, link) => {
        this.$emit('link-updated', id, 'updated', link)
      })

      gantt.attachEvent('onAfterLinkDelete', (id, link) => {
        this.$emit('link-updated', id, 'deleted')
      })
      gantt.$_eventsInitialized = true;
    },
    needRefresh () {
      gantt.refreshData();
    }
  },

  mounted () {
    this.$_initGanttEvents();
    this.firebaseApp = this.$store.state.firebase
    window.setInterval(() => {
      if (this.$props.instance === this.$store.state.GanttInstance) {
        gantt.clearAll()
        gantt.parse(this.$props.tasks)
        if (this.timer <= 6666) {
          this.timer *= 2
        }
      }
    }, this.timer)
    gantt.init(this.$refs.gantt)
    gantt.clearAll()
  }
}
</script>

<style>
  @import "../../node_modules/dhtmlx-gantt/codebase/dhtmlxgantt.css";
  .gantt_grid_scale {
    background-color: rgb(62, 63, 65);
  }
  .gantt_data_area {
    background-color: rgb(62, 63, 65);
  }
  .gantt_grid_data {
    background-color: rgb(62, 63, 65);
  }
  .gantt_task_line {
    border-radius: 20px;
    background-color: rgb(13, 120, 213);
    border-color: rgb(13, 120, 213);
  }
  .gantt_task_progress {
    background-color: rgb(33, 150, 243);
  }
  .gantt_row {
    background-color: rgb(62, 63, 65);
    color: white;
    border-color: black;
    margin: 0px;
  }
  .gantt_task_row {
    background-color: rgb(62, 63, 65);
    color: white;
    border-color: black;
    margin: 0px;
  }
  .gantt_task_row.odd {
    background-color: rgb(62, 63, 65);
  }
  .odd {
    background-color: rgb(62, 63, 65);
  }
  .gantt_cell {
    background-color: rgb(62, 63, 65);
    color: white;
  }
  .gantt_grid_data .gantt_cell {
    color: white;
  }
  .gantt_task_cell {
    border-color: black;
  }
  .gantt_selected {
    background-color: rgb(122, 123, 125);
  }
  .gantt_task_row.gantt_selected {
    background-color: rgba(152, 153, 155, 0.9);
  }
.gantt_add {
  display: none !important;
}
.gantt_cal_light {
  display: none !important;
}
.gantt_cal_cover {
  display: none;
}
.gantt_grid_head_cell.gantt_grid_head_add {
  display: none;
}
</style>
