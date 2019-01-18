var sponsors = [
  /* {
    "name": "",
    "enabled": false,
    "url": "",
    "width": 275,
    "bio": "<p></p>"
  } */
  {
    "name": "signalfx",
    "enabled": true,
    "url": "https://signalfx.com/",
    "width": 175,
    "bio": "<p>SignalFx is a leader in real-time operational intelligence for data-driven DevOps. The service discovers and collects metrics across every component in the cloud, replacing traditional point tools and providing real-time visibility into today’s dynamic environments. Leveraging the massively scalable SignalFx platform, the SaaS service is optimized for container and microservices based architectures and provides powerful visualization, proactive alerting, and collaborative triage capabilities across organizations of all sizes. SignalFx is used by Fortune 500 enterprises across financial services, apparel, industrials, telecommunications, media, and by web-scale players like Yelp, Hubspot, Acquia, and Kayak.</p>",
  },
  {
    "name": "microsoft",
    "enabled": true,
    "url": "https://azure.microsoft.com/en-us/?v=18.27",
    "width": 250,
    "bio": "<p>Cloud for all.</p><p>Microsoft Azure believes that all individuals and groups should be empowered with the full freedom and power of the cloud. The cloud should not be available to only an elite few. Azure offers the trust, transparency, and humanity that all companies need to navigate, thrive, and endure in this increasingly cloud-powered world of business.</p>"
  },
  {
    "name": "wavefront",
    "enabled": false,
    "url": "https://www.wavefront.com/",
    "bio": "<p>Wavefront™ by VMware® is a SaaS-based metrics monitoring and analytics platform that handles the high-scale requirements of modern cloud-native applications. Wavefront’s speed, scale and flexibility allows DevOps and developer teams instant insight into the performance of their highly-distributed cloud-native services. Wavefront’s analytics, query-driven alerts, interactive visualizations, open API, and integrations, all powered by massively scalable time-series database delivers “the first pane of glass” visibility helping DevOps teams detect performance anomalies while ensuring high availability of key cloud services.</p><p>Developers can self-serve and adapt Wavefront analytics to unique needs of their code while gaining visibility into its production behavior.</p>",
  },
  {
    "name": "newrelic",
    "enabled": true,
    "url": "https://newrelic.com/",
    "bio": "<p>New Relic provides the real-time insights that software-driven businesses need to innovate faster. New Relic’s cloud platform makes every aspect of modern software and infrastructure observable, so companies can find and fix problems faster, build high-performing DevOps teams, and speed up transformation projects. Learn why more than 50% of the Fortune 100 trust New Relic at <a href=\"https://newrelic.com/\">newrelic.com</a>.</p>",
  },
  {
    "name": "lightstep",
    "enabled": true,
    "url": "https://lightstep.com/",
    "bio": "<p>LightStep's mission is to cut through the scale and complexity of today's software to help organizations stay in control of their systems. Its first product, LightStep [x]PM, provides an accurate, detailed snapshot of the entire software system at any point in time, enabling organizations to identify bottlenecks and resolve incidents rapidly.</p>"
  },
  {
    "name": "datadog",
    "enabled": true,
    "url": "http://www.datadoghq.com/",
    "width": 150,
    "bio": "<p>Datadog is a SaaS-based monitoring and analytics platform for large-scale applications and infrastructure. Combining real-time metrics from servers, containers, databases, and applications with end-to-end tracing and log management, Datadog delivers actionable alerts and powerful visualizations to provide full-stack observability. Datadog includes over 250 vendor-supported integrations and APM libraries for several languages.</p>"
  },
  {
    "name": "catchpoint",
    "enabled": true,
    "url": "http://catchpoint.com/",
    "width": 240,
    "bio": "<p>Catchpoint is a leading digital experience intelligence company that provides unparalleled insight into customer-critical services to help businesses consistently deliver amazing digital experiences. Catchpoint is the only performance digital experience monitoring platform that provides integrated synthetic and real user monitoring, comprehensive test types, real-time analytics, and a diverse node network to help you continuously preempt performance issues and optimize service delivery. More than 400 customers in over 30 countries trust Catchpoint to strengthen their brands and grow their businesses.</p>"
  },
  {
    "name": "gremlin",
    "enabled": true,
    "url": "https://www.gremlin.com/",
    "width": 150,
    "bio": "<p>Downtime is expensive. It hurts customer trust. And existing solutions are reactive. Gremlin’s proactive failure testing finds weaknesses in your system before they cause problems. Think of it as vaccinating your network. In a safe, secure, and controlled manner, our software injects failures like packet loss or CPU memory maximization, allowing you to find possible weak spots, resolve them, and make your network stronger. For nearly a decade, we’ve been doing this type of failure testing at companies like Amazon and Netflix. We bring this expertise to your network and harden your systems.</p>"
  },
  {
    "name": "thousandeyes",
    "enabled": false,
    "url": "https://www.thousandeyes.com/",
    "bio": "<p>ThousandEyes delivers Network Intelligence—visibility into experience for every user and application over any network. An algorithmically enhanced data set from smart monitoring agents deployed across the Internet, within your organization and on endpoint devices, plus collective data from other Internet-centric organizations, provides the most complete understanding of app delivery, topology dependencies and network behavior. Quickly solve DNS, DDoS, routing, provider or device issues, then share insights with customers and providers. Deliver superior digital experiences, modernize your enterprise WAN, and successfully migrate to the cloud.</p>"
  },
  {
    "name": "manageengine",
    "enabled": false,
    "url": "https://www.manageengine.com/",
    "bio": "<p>As the IT management division of Zoho Corporation, ManageEngine prioritizes flexible solutions that work for all businesses, regardless of size or budget.</p><p>ManageEngine crafts comprehensive IT management software with a focus on making your job easier. With our 90+ products and free tools cover everything your IT needs, you can take complete control of your IT infrastructure and services—both on-premises and in the cloud.</p><p>For more information, visit <a href=\"https://www.manageengine.com/\">https://www.manageengine.com/</a></p>"
  },
  {
    "name": "influxdata",
    "enabled": false,
    "url": "https://www.influxdata.com/",
    "bio": "<p><a href=\"https://www.influxdata.com/\">InfluxData</a>, the creators of InfluxDB, delivers a modern open source platform built from the ground up for metrics and events (time series data). Whether the data comes from humans, sensors, or machines, InfluxData empowers developers to build next-generation monitoring, analytics, and IoT applications faster, easier, and to scale delivering real business value quickly. Based in San Francisco, InfluxData customers include Autodesk, Cisco, eBay, and SolarCity. Visit <a href=\"https://www.influxdata.com/\">influxdata.com</a>. Twitter: <a href=\"https://twitter.com/influxdb\">@influxdb</a>.</p>",
  },
  {
    "name": "bigpanda",
    "enabled": false,
    "url": "http://bigpanda.io/",
    "width": 225,
    "bio": "<p>BigPanda Inc. enables large enterprises to automate and scale IT Operations to meet the complex demands of digital transformation. The company is the first provider of an Autonomous Digital Operations platform that intelligently automates IT incident management. Customers such as Intel, TiVo, Turner Broadcasting, and Workday rely on BigPanda to minimize operating costs, improve service availability, and reduce IT risk. The BigPanda Platform delivers superior time-to-value by correlating operational data, automating the incident management lifecycle, and streamlining manual processes. Founded in 2012, BigPanda is backed by top-tier investors including Sequoia Capital, Mayfield, and Battery Ventures. Visit <a href=\"https://app.salesforceiq.com/r?target=5b06e39cc9e77c0079c46d85&t=AFwhZf1sDdIV3acZ8wiWIyduU8PDA_qyYpgagHo5gq9sWqCq94tYD5_b7_bQo5TeEveVdRjObdRhQkQfmZTl1cQkgJ2fqBs_R8ZhOk7e707zFz-RWy-zY6B_hsHQn-GT_nTJOLwpQQAa\">www.bigpanda.io</a> for more information.</p>",
  },
  {
    "name": "appdynamics",
    "enabled": true,
    "url": "https://www.appdynamics.com/",
    "width": 185,
    "bio": "<p>AppDynamics empowers the enterprise with a solution for real-time application and business performance. Together with Cisco, we’re helping companies make mission critical and strategic decisions that improve customer experience and accelerate business in a multi-cloud world.</p>"
  },
  {
    "name": "reactiveops",
    "enabled": true,
    "url": "https://www.reactiveops.com/",
    "bio": "<p>ReactiveOps provides DevOps expertise and best practices to help companies implement world-class, Kubernetes-based Infrastructure on AWS/GCP — then we maintain it. We instill confidence in a company’s application so that their engineers can focus on innovation that matters.</p>",
  },
  {
    "name": "moogsoft",
    "enabled": true,
    "url": "https://www.moogsoft.com/",
    "width": 175,
    "bio": "<p>Moogsoft is a pioneer and leading provider of <a href=\"https://www.moogsoft.com/product/\">AIOps solutions</a> that help IT teams work faster and smarter. With patented AI analyzing billions of events daily across the world’s most complex IT environments, the Moogsoft AIOps platform helps the world’s top enterprises avoid outages, automate service assurance, and accelerate digital transformation initiatives.</p>",
  },
  {
    "name": "elastic",
    "enabled": true,
    "url": "https://www.elastic.co/",
    "bio": "<p>Elastic believes getting immediate, actionable insight from data matters. As the company behind the four open source projects — Elasticsearch, Logstash, Kibana, and Beats (the Elastic stack) — designed to take data from any source and search, analyze, and visualize it in real time, Elastic is helping people make sense of data. From stock quotes to Twitter streams, Apache logs to WordPress blogs, our products are extending what's possible with data, delivering on the promise that good things come from connecting the dots.</p>"
  },
  {
    "name": "flowmill",
    "enabled": true,
    "url": "https://www.flowmill.com/",
    "bio": "<p>Flowmill is a cloud observability tool designed to accelerate fault resolution in production and provide a complete picture of distributed applications by continuously monitoring every service to service interaction as well as the cloud infrastructure and 3rd party APIs. With sub-second measurements and an extremely low latency processing pipeline, Flowmill automatically identifies failing components in real time and generates actionable alerts. Flowmill monitoring has negligible overhead, no sampling, no per-service configuration or code changes, and can be deployed across your entire application with minutes.</p>"
  },
  {
    "name": "sensu",
    "enabled": false,
    "url": "https://sensu.io/",
    "width": 175,
    "bio": "<p>Sensu Inc. is the creator and maintainer of Sensu, the open source monitoring event pipeline. Founded in 2017, Sensu empowers businesses to automate their monitoring workflow and gain deep visibility into their Kubernetes, hybrid cloud, and bare metal infrastructure. Backed by one of the largest open source communities in monitoring, companies like Sony, Box.com, and Activision rely on Sensu to help them deliver value to their customers faster, at larger scale. Sensu maintains the free and open source Sensu Core framework as well as the commercially supported Sensu Enterprise, which offers enhanced features to simplify operations and governance, with multi-cloud support for monitoring at scale.</p><p>Headquartered in Portland, Oregon, Sensu currently operates as a fully distributed team, with employees located throughout the United States and Canada. For more information, follow <a href=\"https://twitter.com/sensu\">@sensu</a> on Twitter or visit <a href=\"https://sensu.io/\">https://sensu.io</a>.</p>"
  },
]
