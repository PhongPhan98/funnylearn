using Ganss.XSS;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Net.Http.Headers;

namespace funnylearn.Controllers
{
    public class BaseApiController : Controller
    {
        protected const string projectName = "EW_Internal";
        private string token = string.Empty;
        private string key = string.Empty;
        protected string _apiES = "";
        protected string _keyES = "";
        protected string _typeConnect = "es"; //es: connect qua ES, db: connection qua database

        protected string _strUserLogin => GetUserLogin();
        
        protected string GetUserLogin()
        {
            var val = Convert.ToString(HttpContext.Request.Headers["UserLogin"]);
            if (!string.IsNullOrEmpty(val))
            {
                return Convert.ToString(HttpContext.Request.Headers["UserLogin"]);
            }
            return "";
        }

        protected bool CheckUserLogin()
        {
            var val = Convert.ToString(HttpContext.Request.Headers["UserLogin"]);
            if (!string.IsNullOrEmpty(val))
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        /// <summary>
        /// Check authen: Authen return true else false
        /// </summary>
        /// <param name="headers"></param>
        /// <returns></returns>
        protected bool CheckAuthen(HttpRequestHeaders headers, string key)
        {
            bool result = true;
            if (headers.Contains("AuthenKey"))
            {
                token = headers.GetValues("AuthenKey").ToString();
            }
            if (string.IsNullOrEmpty(token) || string.IsNullOrEmpty(key) || System.Configuration.ConfigurationManager.AppSettings[key] == null || token != System.Configuration.ConfigurationManager.AppSettings[key].ToString())
            {
                result = false;
            }
            return result;
        }

        /// <summary>
        /// anti xss
        /// </summary>
        /// <param name="html"></param>
        /// <returns></returns>
        protected string AntiXss(string html)
        {
            if (string.IsNullOrEmpty(html))
            {
                return string.Empty;
            }
            var sanitizer = new HtmlSanitizer();
            sanitizer.AllowedAttributes.Add("class");
            sanitizer.AllowDataAttributes = true;
            return sanitizer.Sanitize(html);
        }

    }
}
