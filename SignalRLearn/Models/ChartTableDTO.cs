using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SignalRLearn.Models
{
    public class ChartTableDTO
    {
        /// <summary>
        ///  用戶名
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// 訊息
        /// </summary>
        public string Message { get; set; }

        /// <summary>
        /// 時間
        /// </summary>
        public String Time { get; set; }
    }
}