import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import HelloMaterial from '@/HelloMaterial'
import MaterialGS1 from '@/components/MaterialGS1'
import MaterialGS2 from '@/components/MaterialGS2'
import Layout1 from '@/components/Layout1'
import Lists from '@/components/Lists'
import Table from '@/components/Table'
import Scrollable from '@/components/ScrollableMaterial'
import BarChart from '@/components/BarChart'
import RadarChart from '@/components/RadarChart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hellovue',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'HelloMaterial',
      component: HelloMaterial
    },
    {
      path: '/gettingstarted1',
      name: 'MaterialGS1',
      component: MaterialGS1
    },
    {
      path: '/gettingstarted2',
      name: 'MaterialGS2',
      component: MaterialGS2
    },
    {
      path: '/layoutexample1',
      name: 'layout1',
      component: Layout1
    },
    {
      path: '/listexample',
      name: 'list',
      component: Lists
    },
    {
      path: '/table',
      name: 'table',
      component: Table
    },
    {
      path: '/scrollable',
      name: 'scroll',
      component: Scrollable
    },
    {
      path: '/barchart',
      name: 'barchart',
      component: BarChart
    },
    {
      path: '/radarchart',
      name: 'radarchart',
      component: RadarChart
    }
  ]
})
