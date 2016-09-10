using Owin;
using System.Web.Http;
using Microsoft.Owin;
using Unity.WebApi;

[assembly: OwinStartup(typeof(ScheduleBackendService.Web.Startup))]

namespace ScheduleBackendService.Web
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {            
            GlobalConfiguration.Configure(config =>
            {
                config.DependencyResolver = new UnityDependencyResolver(UnityConfiguration.GetContainer());
                ScheduleBackendService.ApiConfiguration.Install(config, app);
            });
        }
    }
}
