var sponsors = [
  {
    "name": "librato",
    "url": "https://metrics.librato.com/",
    "bio": "<p>Librato is the creator of Metrics, a cloud-based service that helps businesses monitor all aspects of their operation, be it their cloud or datacenter infrastructure, their applications, their business metrics, or even their sensor network. It is a platform for storing, visualizing, correlating and acting on any and all of the time series data they want to monitor. Whether data is collected with open source collection agents, via language bindings, or via simple scripts, with Metrics all monitoring data is brought together in a unified hosted environment, helping users to see trends, detect signs of problems early, minimize their impact through automated actions, and quickly find and fix their root cause. Its ease of use, and stunning graphs and dashboards make it both easier and more fun to safeguard the availability and performance of any applications.</p>"
  },
  {
    "name": "github",
    "url": "https://github.com/",
    "width": 175,
    "bio": "<p>GitHub provides tools to collaboratively develop and host source code. Code review, issue tracking, wikis with ReST, AsciiDoc, and Markdown support -- our goal is to make it easier for you and your team to build great software, whether your team is your co-workers sitting next to you or strangers across the globe. Open source can use GitHub completely for free, making it a great place to discover interesting projects, while businesses can feel safe with our secure private offerings.</p>"
  },
  {
    "name": "newrelic",
    "url": "http://newrelic.com/",
    "bio": "<p>New Relic is a software analytics company that makes sense of billions of metrics about millions of applications in real time. Our comprehensive SaaS-based solution provides one powerful interface for web and native mobile applications and consolidates the performance monitoring data for any chosen technology in your environment. Our 70,000 active accounts use our cloud solution every day to optimize more than 200 billion metrics for 3 million applications. When your brand and customer experience depend on the performance of modern software, New Relic provides insight into your overall environment. Learn more at <a href=\"http://newrelic.com/\" target=\"_blank\">newrelic.com</a>.</p>"
  },
  {
    "name": "elasticsearch",
    "url": "http://www.elasticsearch.com/",
    "bio": "<p>Elasticsearch is on a mission to make massive amounts of data usable for businesses everywhere by delivering the world’s most advanced search and analytics engine available. With a laser focus on achieving the best user experience imaginable, the Elasticsearch ELK stack - comprised of Elasticsearch, Logstash, and Kibana - has become one of the most popular and rapidly growing open source solutions in the market. To learn more, visit <a href=\"http://elasticsearch.com/\">elasticsearch.com</a>.</p>"
  },
  {
    "name": "fastly",
    "url": "http://www.fastly.com/",
    "width": 175,
    "bio": "<p>Fastly is a developer-friendly, Varnish-based CDN that speeds up your site by delivering static, dynamic, and streaming content with the lowest recorded latency. We've built our network for the future with 10Gb Ethernet, multi-core CPUs, and all Solid State Drives (SSDs), and our transparent real-time and historical analytics dashboard provides performance insights.</p><p>Fastly allows you to:</p><ul><li>Cache anything (static & dynamic content, whole pages, APIs & more)</li><li>Control and manage configuration via our API</li><li>Deploy and roll back changes instantly</li><li>Monitor your performance with real-time analytics and logging</li></ul><p>Sign up for a free trial account at <a href=\"http://www.fastly.com/\">http://www.fastly.com</a> and start improving your site performance today!</p>"
  },
  {
    "name": "salesforce",
    "url": "http://www.salesforce.com/",
    "bio": "<p>Salesforce.com is the enterprise cloud computing leader. Our social and mobile cloud technologies—including our flagship sales and CRM applications—help companies connect with customers, partners, and employees in entirely new ways.</p>"
  },
  {
    "name": "puppetlabs",
    "url": "http://puppetlabs.com/",
    "bio": "<p>Puppet Enterprise is IT automation software that helps system administrators manage infrastructure throughout its lifecycle, from provisioning and configuration to patch management and compliance. Using Puppet Enterprise, system administrators can easily automate repetitive tasks, quickly deploy critical applications, and proactively manage change, scaling from tens of servers to thousands, whether on-premise or in the cloud. Find out more at <a href=\"http://puppetlabs.com/\">puppetlabs.com</a>.</p>"
  },
  {
    "name": "pingdom",
    "url": "https://www.pingdom.com/",
    "bio": "<p>Pingdom is a website and performance monitoring company dedicated to making the web faster and more reliable. We do this by creating easy to use tools and services for website owners, regardless of who they are and what size their websites are.</p><p>With Pingdom, customers will instantly be notified of any issues with their website, DNS, email server, or any other infrastructure. All that is needed is a URL – Pingdom will take care of the rest.</p><p>Pingdom has earned the trust of more than 400,000 customers in over 200 countries including Spotify, Instagram, Twitter, Dropbox, Ebay, MailChimp, and more.</p><p>Follow Pingdom on twitter #pingdom or visit <a href=\"https://www.pingdom.com/\" target=\"_blank\">www.pingdom.com</a>.</p>"
  },
  {
    "name": "stackdriver",
    "url": "http://www.stackdriver.com/",
    "bio": "<p>Stackdriver provides powerfully simple monitoring-as-a-service that helps DevOps spend more time on dev and less on ops. Since its inception, Stackdriver has focused on helping cloud-powered companies address performance bottlenecks before they impact customers while reducing the burden associated with patchwork monitoring solutions. Stackdriver Intelligent Monitoring includes several breakthrough features, such as:</p><ul><li>Stack Scanner, an analytics engine that detects transient performance issues, identifies cluster outliers, pinpoints metric anomalies, and predicts capacity constraints.</li><li>Elastic Monitoring, which enables customers to monitor dynamic and ephemeral resources (such as those that scale automatically) without manually updating alerting policies and dashboards.</li><li>AWS Insights, which correlates AWS events, code deploys, and incidents, identifying performance optimization opportunities.</li></ul><p>Hundreds of innovative companies, including Smugmug, 99designs, Vocalocity, Extreme Reach, 8k Miles, and Chopra Center, have standardized on Stackdriver for system and infrastructure monitoring</p>"
  },
  {
    "name": "pagerduty",
    "url": "http://www.pagerduty.com/",
    "bio": "<p>PagerDuty is &quot;9-1-1 dispatch&quot; for IT, helping operations engineers and devops resolve problems with their IT systems as quickly as possible. PagerDuty aggregates errors from all of your IT monitoring tools and handles the people part of the equation: alerting (via phone, SMS or email), on-call scheduling and automatic escalation of critical incidents.</p>"
  },
  {
    "name": "dataloopio",
    "url": "https://www.dataloop.io/",
    "bio": "<p>Dataloop.IO is a SaaS monitoring application designed for DevOps & Operations teams running online services at scale. We take away the burden of building and maintaining custom monitoring solutions in house, with a modern solution designed specifically for the needs of monitoring cloud services, so our customers can concentrate on deploying, scaling and supporting their products.</p><p>If you're a DevOps team running a Cloud Service at scale, starting to move to micro-services and are pushing monitoring tools out to your development teams, Dataloop.IO has been designed specifically for you so sign up today at <a href=\"http://www.dataloop.io/\">www.dataloop.io</a>.</p>"
  },
  {
    "name": "grok",
    "url": "http://groksolutions.com/",
    "bio": "<p>Grok enables superior insights into your critical IT systems so you can stay ahead of problems. Grok learns complex patterns in your Amazon Web Services (AWS) environment and then identifies unusual behavior in those systems - unlike other tools that rely on static thresholds or simple statistics. As software topology and usage patterns change, Grok continuously learns and adapts, eliminating the need for frequent maintenance. Visualization of Grok's analysis is displayed on a constantly updated mobile device, enabling IT professionals to assess the health of their systems anytime, anywhere.</p><p>The algorithms that power Grok are based on principles discovered in studying how the brain processes information. This biologically inspired machine intelligence technology was first described in Jeff Hawkins' book &quot;On Intelligence&quot;.  This technology is ideal for large-scale analysis of continuously streaming datasets and excels at modeling and predicting patterns in data.  Grok and the machine intelligence algorithms that Grok leverages were developed by Numenta, Inc.</p>"
  },
  {
    "name": "bigpanda",
    "url": "http://bigpanda.io/",
    "width": 250,
    "bio": "<p>BigPanda is an incident response platform that helps you manage and resolve Ops incidents faster.  We reduce alert fatigue by cleaning up noisy alerts from across your monitoring stack, so you can focus on critical high-level incidents.  We make dumb alerts smarter by enriching them with unique & actionable insights.  We enable Ops-aware collaboration, so you and your team can make better decisions faster.  Learn more at <a href=\"http://www.bigpanda.io\">www.bigpanda.io</a>.</p>"
  },
  {
    "name": "datadog",
    "url": "http://www.datadoghq.com/",
    "width": 150,
    "bio": "<p>Datadog is a monitoring and analytics platform that covers the full monitoring cycle: from code changes to deployments to alerts. Thanks to its 5-minutes setup, wide application support, pretty charts and open API, Datadog is immediately useful to both development and operations teams.</p>"
  },
  {
    "name": "basho",
    "url": "http://basho.com/",
    "bio": "<p>Basho Technologies is the leader in distributed systems.</p><p>Basho's flagship software is Riak, an open source, distributed database used in production by companies like Comcast, enStratus, GitHub, and BestBuy. Riak is made to scale out (and in) with applications, be highly-available, and simplify operations at scale for developers and ops professionals.</p>"
  },
  {
    "name": "threatstack",
    "url": "https://www.threatstack.com/",
    "bio": "<p>Threat Stack, Inc. is the maker of Cloud Sight™, which provides protection, intelligent detection, and forensics data that enables you to rapidly respond to malicious threats. It's designed to work in modern, cloud-based infrastructure. Our lightweight agent deploys in minutes so you can quickly begin securing your cloud infrastructure.</p>"
  },
  {
    "name": "victorops",
    "url": "http://victorops.com/",
    "width": 250,
    "bio": "<p>VictorOps makes being on-call suck less.</p><ul><li>On-call schedule management</li><li>Incident push, SMS, email, phone notifications</li><li>One touch on-call handoffs</li><li>Mobile incident ack-ing</li><li>Live infrastructure timeline</li><li>Android and iOS native apps</li><li>Integrations with your existing monitoring tools</li></ul><p><a href=\"http://victorops.com/?signup=1\">Try us free for 30 days</a> - no credit card (or firstborn) required.</p>"
  },
  {
    "name": "influxdb",
    "url": "http://influxdb.org/",
    "bio": "<p>InfluxDB is an open source, distributed time series, metrics, and events database. It's designed for analytics workloads for operations, application, user, and business analytics. Written in Go, InfluxDB has no external dependencies. That means you can get running without managing a Zookeeper, HBase, or Cassandra deployment. With a SQL-like query language and an HTTP API, InfluxDB is useful even if you're running only a single box. However, it's built to scale out to hundreds of machines as your data expands. With a growing community, libraries in many languages, plugins for StatsD, CollectD, Fluent, Sensu and others, InfluxDB is the central data store for all your metrics, events, and analytics. We offer support, professional services, and managed hosting to get you up and running either in your own environment or in the cloud.</p>"
  },
  {
    "name": "dyn",
    "url": "http://dyn.com/",
    "bio": "<p>Dyn solutions are at the core of internet performance. Through <strong>traffic management</strong>, <strong>message management</strong> and <strong>performance assurance</strong>, Dyn connects people through the Internet assuring information gets to where it needs to go faster and more reliably than ever before.</p>"
  },
  {
    "name": "oreilly",
    "url": "http://www.oreilly.com/",
    "bio": "<p>O'Reilly Media spreads the knowledge of innovators through its books, online services, magazines, research, and conferences. Since 1978, O'Reilly has been a chronicler and catalyst of leading-edge development, homing in on the technology trends that really matter and galvanizing their adoption by amplifying \"faint signals\" from the alpha geeks who are creating the future. An active participant in the technology community, the company has a long history of advocacy, meme-making, and evangelism.</p>"
  }
]
