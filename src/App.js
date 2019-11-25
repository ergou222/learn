import React from 'react';

// 状态管理
import {Provider} from 'react-redux'
import store from '@/store'

// 路由
import { HashRouter } from 'react-router-dom'




// import Test from '@/components/Test.js'
// import Song from '@/components/Song.js'

import {JdLayout} from '@/components'

function App() {
  return (
  <HashRouter>
    <Provider store={store}>
    <div className="app">
     {/* <Test></Test> */}
     {/* <Song></Song> */}

     {/* 底部样式 */}
    <JdLayout></JdLayout>
    
    </div>
    </Provider>
  </HashRouter>
    
  );
}

export default App;
