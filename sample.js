new Vue({

  el: '#app',
  // dataは、定義されたVue.jsのインスタンスが持つ属性（値）
  data: {
    name: 'A山B郎',
    course: 'Webエンジニアコース',
    acceptancePeriod: '2019年01月期',
    defaultLastId: 3,
    students: [
      { id: 1, name: 'Lisa', course: '機械学習コース', acceptancePeriod: '2019年01月期' },
      { id: 2, name: 'Claudia', course: 'AIエンジニアコース', acceptancePeriod: '2017年11月期' },
      { id: 3, name: 'Regina', course: 'Webエンジニアコース', acceptancePeriod: '2017年11月期' }
    ]
  },
  // methodsに、Vue.jsのインスタンスに使用させたいメソッドを記載する
  methods: {
    addStudent: function(event) {
      this.student = this.students.push({
        id: this.defaultLastId += 1,
        name: this.name,
        course: this.course,
        acceptancePeriod: this.acceptancePeriod
      })
    }
  }
})
