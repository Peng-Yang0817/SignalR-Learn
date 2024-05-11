    using Microsoft.AspNet.SignalR;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web;

    namespace SignalRLearn
    {
        public class MySignalHub : Hub
        {
            /// <summary>
            /// 總結
            /// 上面的Hello() 方法是被客戶端調用的。
            /// 下面的這個Clients.All.hello() 是Server 主動調客戶端的
            /// </summary>
            // Hub 內所有方法，都是要被客戶端調用的方法
            public void Hello()
            {
                // Server 主動調用客戶端的方法
                // 也就是所有客戶端都要有這個Hello 的方法可以被Server 調用
                Clients.All.hello();
            }
            
            // 等等Client 會打這個方法
            public void PublishMsg(string txt)
            {
                // Server 接收到Client 傳來的訊息後，
                //   直接調用Client 提供的clientMsgPublish 方法，並把txt 船過去
                Clients.All.clientMsgPublish(txt);
                
            }
        }
    }