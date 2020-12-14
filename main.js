/**
 * The main render function.
 * All of the JavaScript DOM manipulation happens in here.
 */
function uxResearchToolRender () {
  // List of online resources corresponding to each UX Research Method.
  // Used to display the recommended UX-Research-method cards on the results page.
  const RESEARCH_METHODS = {
    FOCUS_GROUPS: {
      label: 'Focus groups',
      content: [
        {
          link: 'https://www.usability.gov/how-to-and-tools/methods/focus-groups.html',
          name: 'Focus Groups'
        },
        {
          link: 'https://www.linkedin.com/learning/learning-design-research/focus-group?trk=learning-serp_learning_search-card&upsellOrderOrigin=homepage-basic_intent-module-learning',
          name: 'LinkedIn Learning Course: Learning Design Research'
        }
      ]
    },
    CONTEXTUAL_INQUIRY: {
      label: 'Contextual Inquiry',
      content: [
        {
          link: 'https://www.usability.gov/how-to-and-tools/methods/contextual-interview.html',
          name: 'Contextual Interview'
        },
        {
          link: 'https://measuringu.com/contextual-inquiry/',
          name: 'The Essentials of a Contextual Inquiry'
        },
      ]
    },
    DIARY_STUDIES: {
      label: 'Diary Studies',
      content: [
        {
          link: 'https://www.nngroup.com/articles/diary-studies/',
          name: 'Diary Studies: Understanding Long-Term User Behavior and Experiences'
        },
        {
          link: 'https://www.linkedin.com/learning/ux-insights-weekly/what-is-a-diary-study?trk=learning-serp_learning_search-card&upsellOrderOrigin=homepage-basic_intent-module-learning',
          name: 'LinkedIn Learning Course: What is a Diary Study?'
        }
      ]
    },
    ETHNOGRAPHIC_FIELD_STUDIES: {
      label: 'Ethnographic field studies',
      content: [
        {
          link: 'https://www.nngroup.com/articles/field-studies/',
          name: 'Field Studies'
        },
        {
          link: 'https://www.nngroup.com/videos/4-steps-field-studies/',
          name: '4 Steps to Field Studies with Users'
        },
        {
          link: 'https://measuringu.com/qual-methods/',
          name: '5 Types of Qualitative Methods'
        },
        {
          link: 'https://measuringu.com/observation-role/',
          name: '4 Types of Observational Research'
        },
      ]
    },
    JOURNEY_MAPPING: {
      label: 'Journey Mapping',
      content: [
        {
          link: 'https://www.nngroup.com/articles/journey-mapping-101/',
          name: 'Journey Mapping 101'
        },
        {
          link: 'https://www.nngroup.com/videos/journey-mapping-101/',
          name: 'Customer Journey Mapping 101'
        },
        {
          link: 'https://www.nngroup.com/articles/journey-mapping-faq/?lm=paper-prototyping-101&pt=youtubevideo',
          name: 'Journey Mapping: 9 Frequently Asked Questions'
        },
        {
          link: 'https://www.linkedin.com/learning/customer-experience-journey-mapping?trk=learning-serp_learning_search-card&upsellOrderOrigin=homepage-basic_intent-module-learning',
          name: 'LinkedIn Learning Course: Customer Experience Journey Mapping'
        }
      ]
    },
    USER_PERSONAS: {
      label: 'User Personas',
      content: [
        {
          link: 'https://www.nngroup.com/articles/persona/?lm=personas&pt=course',
          name: 'Personas Make Users Memorable for Product Team Members'
        },
        {
          link: 'https://www.usability.gov/how-to-and-tools/methods/personas.html',
          name: 'Personas'
        },
        {
          link: 'https://www.linkedin.com/learning/ux-design-3-creating-personas?trk=learning-serp_learning_search-card&upsellOrderOrigin=homepage-basic_intent-module-learning',
          name: 'LinkedIn Learning Course: UX Design: Creating Personas'
        }
      ]
    },
    REMOTE_USER_INTERVIEWS: {
      label: 'Remote User Interviews',
      content: [
        {
          link: 'https://www.nngroup.com/articles/user-interviews/',
          name: 'User Interviews: How, When, and Why to Conduct Them'
        },
        {
          link: 'https://www.nngroup.com/articles/remote-ux/',
          name: 'Remote UX Work: Guidelines and Resources'
        },
        {
          link: 'https://www.linkedin.com/learning/ux-insights-weekly/what-is-a-user-research-interview?trk=learning-serp_learning_search-card&upsellOrderOrigin=homepage-basic_intent-module-learning',
          name: 'LinkedIn Learning Course: What is a user research interview?'
        },
        {
          link: 'https://www.linkedin.com/learning/ux-research-methods-interviewing/conducting-interviews?u=57888345',
          name: 'LinkedIn Learning Course: UX Research Methods Interviewing'
        }
      ]
    },
    SURVEYS: {
      label: 'Surveys',
      content: [
        {
          link: 'https://www.usability.gov/how-to-and-tools/methods/online-surveys.html',
          name: 'Online Surveys'
        },
        {
          link: 'https://measuringu.com/cux-surveys/',
          name: '7 Survey Types to Measure the Customer Experience'
        },
        {
          link: 'https://www.linkedin.com/learning/ux-foundations-research/surveys?trk=learning-serp_learning_search-card&upsellOrderOrigin=homepage-basic_intent-module-learning',
          name: 'LinkedIn Learning Course: UX Foundations Research - Survey'
        }
      ]
    },
    USER_INTERVIEW: {
      label: 'User Interviews',
      content: [
        {
          link: 'https://www.nngroup.com/articles/user-interviews/',
          name: 'User Interviews: How, When, and Why to Conduct Them'
        },
        {
          link: 'https://www.usability.gov/how-to-and-tools/methods/individual-interviews.html',
          name: 'Individual Interviews'
        },
        {
          link: 'https://www.linkedin.com/learning/ux-research-methods-interviewing?trk=learning-serp_learning_search-card&upsellOrderOrigin=homepage-basic_intent-module-learning',
          name: 'LinkedIn Learning Course: UX Research Methods - Interviewing'
        }
      ]
    },
    ANALYTICS: {
      label: 'Analytics',
      content: [
        {
          link: 'https://www.nngroup.com/articles/analytics-reports-ux-strategists/?lm=analytics-and-user-experience&pt=course',
          name: 'Five Essential Analytics Reports for UX Strategists'
        },
        {
          link: 'https://www.nngroup.com/articles/analytics-user-experience/',
          name: 'Three Uses for Analytics in User-Experience Practice'
        },
        {
          link: 'https://www.linkedin.com/learning/learning-web-analytics-2?trk=learning-serp_learning_search-card&upsellOrderOrigin=homepage-basic_intent-module-learning',
          name: 'LinkedIn Learning Course: Learning Web Analytics'
        }
      ]
    },
    SUPPORT_CALL_MONITORING: {
      label: 'Support Call Monitoring',
      content: [
        {
          link: 'https://www.twilio.com/learn/contact-center/call-center-analytics',
          name: 'Improve Customer Satisfaction with Call Center Analytics'
        },
        {
          link: 'https://www.nngroup.com/articles/testing-decreased-support/',
          name: 'How Iterative Testing Decreased Support Calls By 70% on Mozilla\'s Support Website'
        },
        {
          link: 'https://www.nngroup.com/articles/customer-service-omnichannel-ux/',
          name: 'Minimize the Need for Customer Service to Improve the Omnichannel UX'
        },
        {
          link: 'https://measuringu.com/customer-service/',
          name: 'Why Do People Call Customer Service?'
        },
      ]
    },
    DESIRABILITY_STUDY: {
      label: 'Desirability Study',
      content: [
        {
          link: 'https://measuringu.com/microsoft-desirability/',
          name: '10 Things to Know About the Microsoft Desirability Toolkit'
        },
        {
          link: 'https://www.linkedin.com/learning/ux-foundations-research/desirability-studies?autoplay=true&trk=learning-course_table-of-contents_video&upsellOrderOrigin=homepage-basic_intent-module-learning',
          name: 'LinkedIn Learning Course'
        },
        {
          link: 'https://www.linkedin.com/learning/ux-insights-weekly/what-is-a-desirability-study?trk=learning-serp_learning_search-card&upsellOrderOrigin=homepage-basic_intent-module-learning ',
          name: 'LinkedIn Learning Course: What is a desirability study?'
        }
      ]
    },
    FIVE_SECOND_TEST: {
      label: 'Five Second Test',
      content: [
        {
          link: 'https://www.nngroup.com/videos/5-second-usability-test/',
          name: '5-Second Usability Test'
        },
        {
          link: 'https://measuringu.com/five-second-tests/',
          name: 'MeasuringU: 5 Second Usability Tests'
        },
        {
          link: 'https://www.linkedin.com/learning/user-experience-for-web-design/the-five-second-test?trk=learning-serp_learning_search-card&upsellOrderOrigin=homepage-basic_intent-module-learning',
          name: 'LinkedIn Learning Course: The Five Second Test'
        }
      ]
    },
    FIRST_CLICK_TEST: {
      label: 'First Click Test',
      content: [
        {
          link: 'https://www.usability.gov/how-to-and-tools/methods/first-click-testing.html',
          name: 'First Click Testing'
        },
        {
          link: 'https://measuringu.com/first-click/',
          name: 'MeasuringU: Getting the First Click Right'
        },
        {
          link: 'https://measuringu.com/first-choice/',
          name: 'MeasuringU: The Importance of the First Choice in Website Navigation'
        }
      ]
    },
    CARD_SORTING: {
      label: 'Card Sorting',
      content: [
        {
          link: 'https://www.nngroup.com/articles/card-sorting-definition/',
          name: 'Card Sorting: Uncover Users\' Mental Models for Better Information Architecture'
        },
        {
          link: 'https://www.usability.gov/how-to-and-tools/methods/card-sorting.html',
          name: 'Card Sorting'
        },
        {
          link: 'https://measuringu.com/card-sorting/',
          name: 'MeasuringU: 10 Things to Know about Card Sorting'
        },
        {
          link: 'https://www.linkedin.com/learning/ux-research-methods-card-sorting?trk=learning-serp_learning_search-card&upsellOrderOrigin=homepage-basic_intent-module-learning',
          name: 'LinkedIn Learning Course: UX Research Methods - Card Sorting'
        },
        {
          link: 'https://www.linkedin.com/learning/ux-foundations-information-architecture?trk=learning-serp_learning_search-card&upsellOrderOrigin=homepage-basic_intent-module-learning',
          name: 'LinkedIn Learning Course: UX Foundation - Information Architecture'
        }
      ]
    },
    TREE_TESTING: {
      label: 'Tree Testing',
      content: [
        {
          link: 'https://www.nngroup.com/articles/tree-testing/',
          name: 'Tree Testing: Fast, Iterative Evaluation of Menu Labels and Categories'
        },
        {
          link: 'https://www.nngroup.com/articles/interpreting-tree-test-results/',
          name: 'Tree Testing Part 2: Interpreting the Results'
        },
        {
          link: 'https://measuringu.com/tree-testing-ia/',
          name: 'Using Tree-Testing to Test Information Architecture'
        },
        {
          link: 'https://measuringu.com/approach/tree-testing/',
          name: 'Tree Testing'
        },
        {
          link: 'https://www.linkedin.com/learning/ux-research-methods-card-sorting/tree-test-planning?trk=learning-serp_learning_search-card&upsellOrderOrigin=homepage-basic_intent-module-learning',
          name: 'LinkedIn Learning Course: Tree Test Planning'
        },
        {
          link: 'https://www.linkedin.com/learning/ux-foundations-information-architecture?trk=learning-serp_learning_search-card&upsellOrderOrigin=homepage-basic_intent-module-learning',
          name: 'LinkedIn Learning Course: UX Foundation - Information Architecture'
        }
      ]
    },
    PROTOTYPE_TESTING: {
      label: 'Prototype Testing',
      content: [
        {
          link: 'https://www.nngroup.com/videos/paper-prototyping-101/',
          name: 'Paper Prototyping 101'
        },
        {
          link: 'https://www.linkedin.com/learning/ux-foundations-prototyping-2/testing-and-evaluating-prototypes?trk=learning-serp_learning_search-card&upsellOrderOrigin=homepage-basic_intent-module-learning',
          name: 'LinkedIn Learning Course: Testing and Evaluating Prototypes'
        },
        {
          link: 'https://www.linkedin.com/learning/learning-design-research/user-testing-and-rapid-prototyping?trk=learning-serp_learning_search-card&upsellOrderOrigin=homepage-basic_intent-module-learning\n',
          name: 'LinkedIn Learning Course: User Testing and Rapid Prototyping'
        },
        {
          link: 'https://www.linkedin.com/learning/ux-design-6-paper-prototyping/tips-for-user-testing-prototype-interfaces?trk=learning-serp_learning_search-card&upsellOrderOrigin=homepage-basic_intent-module-learning',
          name: 'LinkedIn Learning Course: Tips for user testing prototype interfaces'
        }
      ]
    },
    AB_TESTING: {
      label: 'AB Testing',
      content: [
        {
          link: 'https://www.nngroup.com/videos/ab-testing-101/ ',
          name: 'A/B Testing 101'
        },
        {
          link: 'https://measuringu.com/ab-testing/',
          name: '10 THINGS TO KNOW ABOUT A/B TESTING'
        },
        {
          link: 'https://www.linkedin.com/learning-login/continue?account=57888345&forceAccount=false&authModeName=VT+Login&authUUID=7RKblbZQQ2ySxAmwIifGjg%3D%3D&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Fux-foundations-research%2Fmultivariate-testing-and-a-b-testing%3Ftrk%3Dlearning-serp_learning_search-card%26upsellOrderOrigin%3Dhomepage-basic_intent-module-learning',
          name: 'LinkedIn Learning Course: Multivariate Testing and A/B Testing'
        }
      ]
    },
    ACCESSIBILITY_EVALUATION: {
      label: 'Accessibility Evaluation',
      content: [
        {
          link: 'https://www.w3.org/WAI/test-evaluate/',
          name: 'Evaluating Web Accessibility Overview'
        },
        {
          link: 'https://www.w3.org/WAI/ER/tools/',
          name: 'Web Accessibility Evaluation Tools List'
        },
        {
          link: 'https://www.linkedin.com/learning/ux-foundations-accessibility?trk=learning-serp_learning_search-card&upsellOrderOrigin=homepage-basic_intent-module-learning',
          name: 'LinkedIn Learning Course: UX Foundations - Accessibility'
        }
      ]
    },
    // HEAT_MAP: {
    //   label: 'Click Heat Map',
    //   content: [
    //     {
    //       link: 'https://measuringu.com/visualize-behaviors/',
    //       name: 'MeasuringI: 4 Ways to Visualize Website Behavior'
    //     },
    //   ]
    // },
    SEARCH_LOG_ANALYSIS: {
      label: 'Search Log Analysis',
      content: [
        {
          link: 'https://www.nngroup.com/articles/search-log-analysis/',
          name: 'Search-Log Analysis: The Most Overlooked Opportunity in Web UX Research'
        },
      ]
    },
    SOCIAL_MEDIA_MONITORING: {
      label: 'Social Media Monitoring',
      content: [
        {
          link: 'https://www.linkedin.com/learning/learn-social-media-monitoring?trk=learning-serp_learning_search-card&upsellOrderOrigin=homepage-basic_intent-module-learning',
          name: 'LinkedIn Learning Course: Learn Social Media Monitoring'
        }
      ]
    },
    WEBSITE_ANALYTICS: {
      label: 'Website Analytics',
      content: [
        {
          link: 'https://www.nngroup.com/articles/analytics-reports-ux-strategists/?lm=analytics-and-user-experience&pt=course',
          name: 'Five Essential Analytics Reports for UX Strategists'
        },
        {
          link: 'https://www.nngroup.com/articles/analytics-user-experience/',
          name: 'Three Uses for Analytics in User-Experience Practice'
        },
        {
          link: 'https://www.linkedin.com/learning/learning-web-analytics-2?trk=learning-serp_learning_search-card&upsellOrderOrigin=homepage-basic_intent-module-learning',
          name: 'LinkedIn Learning Course: Learning Web Analytics'
        }
      ]
    },
    USABILITY_STUDY: {
      label: 'Usability Study',
      content: [
        {
          link: 'https://www.usability.gov/how-to-and-tools/methods/usability-testing.html',
          name: 'Usability Testing'
        },
        {
          link: 'https://www.nngroup.com/articles/usability-testing-101/',
          name: 'Usability Testing 101'
        },
        {
          link: 'https://www.linkedin.com/learning/ux-deep-dive-usability-testing?trk=learning-serp_learning_search-card&upsellOrderOrigin=homepage-basic_intent-module-learning',
          name: 'LinkedIn Learning Course: UX Deep Dive - Usability Testing'
        },
        {
          link: 'https://www.linkedin.com/learning/ux-foundations-usability-testing?trk=learning-serp_learning_search-card&upsellOrderOrigin=homepage-basic_intent-module-learning',
          name: 'LinkedIn Learning Course: UX Foundations - Usability Testing'
        }
      ]
    },
    HEURISTIC_EVALUATION: {
      label: 'Heuristic Evaluation',
      content: [
        {
          link: 'https://www.usability.gov/how-to-and-tools/methods/heuristic-evaluation.html',
          name: 'Heuristic Evaluations and Expert Reviews'
        },
        {
          link: 'https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/',
          name: 'How to Conduct a Heuristic Evaluation'
        },
        {
          link: 'https://www.linkedin.com/learning/ux-insights-weekly/what-is-a-heuristic-evaluation?trk=learning-serp_learning_search-card&upsellOrderOrigin=homepage-basic_intent-module-learning',
          name: 'LinkedIn Learning Course: What is a Heuristic Evaluation?'
        },
        {
          link: 'https://www.linkedin.com/learning/ux-foundations-research/expert-reviews-heuristic-reviews?trk=learning-serp_learning_search-card&upsellOrderOrigin=homepage-basic_intent-module-learning',
          name: 'LinkedIn Learning Course: Expert Reviews Heuristic Reviews'
        }
      ]
    },
    INTERCEPT_SURVEYS: {
      label: 'Intercept Surveys',
      content: [
        {
          link: 'https://www.nngroup.com/articles/exit-intent-good-ux/',
          name: '10 Ways to Use Exit-Intent Popups to Improve UX'
        },
      ]
    },
    TRUE_INTENT_TESTING: {
      label: 'True Intent Testing',
      content: [
        {
          link: 'https://measuringu.com/true-intent/',
          name: 'MeasuringU: Measuring Website Visitor\' True Intent',
        },
      ]
    },
  };

  /** List of selectable options for the UX suggestion tool.
   * Each option is unique, thus, allowing us to render corresponding
   * slides based on thee option selected in the previous slide.
   * e.g. "MyUsers --> Generate --> Attitudes" vs. "MyService --> Executing --> Attitudes"
   * These two workflows will generate very different recommendations.
   */
  const OPTIONS = {
    MY_USERS: 'myUsers',
    MY_SERVICE: 'myService',
    GENERATE: 'generate',
    VALIDATE: 'validate',
    STRATEGIZING: 'strategizing',
    EXECUTING: 'executing',
    ASSESSING: 'assessing',
    GENERATE_ATTITUDES: 'generateAttitudes',
    GENERATE_BEHAVIORS: 'generateBehaviors',
    GENERATE_ATTITUDES_AND_BEHAVIORS: 'generateAttitudesAndBehaviors',
    VALIDATE_ATTITUDES: 'validateAttitudes',
    VALIDATE_BEHAVIORS: 'validateBehaviors',
    VALIDATE_ATTITUDES_AND_BEHAVIORS: 'validateAttitudesAndBehaviors',
    STRATEGIZING_ATTITUDES: 'strategizingAttitudes',
    STRATEGIZING_BEHAVIORS: 'strategizingBehaviors',
    EXECUTING_ATTITUDES: 'executingAttitudes',
    EXECUTING_BEHAVIORS: 'executingBehaviors',
    ASSESSING_WHAT: 'assessingWhat',
    ASSESSING_WHY: 'assessingWhy',
  };

  // Selectable options with label.
  const OPTIONS_WITH_TITLE = {
    [OPTIONS.MY_USERS]: 'My Users',
    [OPTIONS.MY_SERVICE]: 'My Service',
    [OPTIONS.GENERATE]: 'Generate new ideas',
    [OPTIONS.VALIDATE]: 'Validate existing ideas',
    [OPTIONS.STRATEGIZING]: 'Strategizing',
    [OPTIONS.EXECUTING]: 'Executing',
    [OPTIONS.ASSESSING]: 'Assessing',
    [OPTIONS.GENERATE_ATTITUDES]: 'Attitudes',
    [OPTIONS.GENERATE_BEHAVIORS]: 'Behaviors',
    [OPTIONS.GENERATE_ATTITUDES_AND_BEHAVIORS]: 'Attitudes & Behaviors',
    [OPTIONS.VALIDATE_ATTITUDES]: 'Attitudes',
    [OPTIONS.VALIDATE_BEHAVIORS]: 'Behaviors',
    [OPTIONS.VALIDATE_ATTITUDES_AND_BEHAVIORS]: 'Attitudes & Behaviors',
    [OPTIONS.STRATEGIZING_ATTITUDES]: 'Attitudes',
    [OPTIONS.STRATEGIZING_BEHAVIORS]: 'Behaviors',
    [OPTIONS.EXECUTING_ATTITUDES]: 'Attitudes',
    [OPTIONS.EXECUTING_BEHAVIORS]: 'Behaviors',
    [OPTIONS.ASSESSING_WHAT]: 'What is happening',
    [OPTIONS.ASSESSING_WHY]: 'Why is it happening',
    REMOTE: 'Remote study',
    IN_PERSON: 'In-person study'
  };

  const SECONDARY_OPTIONS = {
    REMOTE: {
      value: 'REMOTE',
      label: 'Remote study',
      icon: 'fas fa-4x fa-video text-gray',
    },
    IN_PERSON: {
      value: 'IN_PERSON',
      label: 'In-person study',
      icon: 'fas fa-4x fa-user-friends text-gray',
    }
  };

  // The HTML icon tags for the survey slides.
  const ICONS = {
    ATTITUDE: `<i class="fas fa-3x fa-comment-dots text-gray"></i>`,
    BEHAVIOR: `<i class="fas fa-3x fa-mouse text-gray"></i>`,
    ATTITUDE_AND_BEHAVIOR: `<div><i class="fas fa-3x fa-comment-dots text-gray mr-3"></i><i class="fas fa-3x fa-mouse text-gray"></i></div>`
  };

  /** List of UX Research methods and combination of options that generates them.
   *  Each UX Research method has a set of user selectable options inside the "options" array.
   *  The suggestion algorithm will check if the "userSelectedOptions" array is a subset of
   *  the "options" array for each UX Research method. If so, then that UX Research method will be
   *  rendered on the results page.
   */
  const RESEARCH_METHODS_WITH_OPTIONS = [
    {
      name: 'FOCUS_GROUPS',
      options: [
        SECONDARY_OPTIONS.REMOTE.value, SECONDARY_OPTIONS.IN_PERSON.value,
        OPTIONS.MY_USERS, OPTIONS.GENERATE, OPTIONS.GENERATE_ATTITUDES,
        OPTIONS.VALIDATE, OPTIONS.VALIDATE_ATTITUDES,
        OPTIONS.MY_SERVICE, OPTIONS.STRATEGIZING, OPTIONS.STRATEGIZING_ATTITUDES,
        OPTIONS.EXECUTING, OPTIONS.EXECUTING_ATTITUDES]
    },
    {
      name: 'USER_INTERVIEW',
      options: [
        SECONDARY_OPTIONS.REMOTE.value, SECONDARY_OPTIONS.IN_PERSON.value,
        OPTIONS.MY_USERS, OPTIONS.GENERATE, OPTIONS.GENERATE_ATTITUDES,
        OPTIONS.VALIDATE, OPTIONS.VALIDATE_ATTITUDES,
        OPTIONS.MY_SERVICE, OPTIONS.STRATEGIZING, OPTIONS.STRATEGIZING_ATTITUDES,
        OPTIONS.EXECUTING, OPTIONS.EXECUTING_ATTITUDES,
        OPTIONS.ASSESSING, OPTIONS.ASSESSING_WHY
      ]
    },
    {
      name: 'CONTEXTUAL_INQUIRY',
      options: [
        SECONDARY_OPTIONS.IN_PERSON.value,
        OPTIONS.MY_USERS, OPTIONS.GENERATE, OPTIONS.GENERATE_ATTITUDES, OPTIONS.GENERATE_ATTITUDES_AND_BEHAVIORS,
        OPTIONS.MY_SERVICE, OPTIONS.STRATEGIZING, OPTIONS.STRATEGIZING_ATTITUDES, OPTIONS.STRATEGIZING_BEHAVIORS,
      ]
    },
    {
      name: 'DIARY_STUDIES',
      options: [
        SECONDARY_OPTIONS.REMOTE.value,
        OPTIONS.MY_USERS, OPTIONS.GENERATE, OPTIONS.GENERATE_BEHAVIORS, OPTIONS.GENERATE_ATTITUDES_AND_BEHAVIORS,
        OPTIONS.MY_SERVICE, OPTIONS.STRATEGIZING, OPTIONS.STRATEGIZING_BEHAVIORS,
      ]
    },
    {
      name: 'ETHNOGRAPHIC_FIELD_STUDIES',
      options: [
        SECONDARY_OPTIONS.IN_PERSON.value,
        OPTIONS.MY_USERS, OPTIONS.GENERATE, OPTIONS.GENERATE_BEHAVIORS,
      ]
    },
    {
      name: 'JOURNEY_MAPPING',
      options: [
        SECONDARY_OPTIONS.REMOTE.value, SECONDARY_OPTIONS.IN_PERSON.value,
        OPTIONS.MY_USERS, OPTIONS.GENERATE, OPTIONS.GENERATE_ATTITUDES_AND_BEHAVIORS,
        OPTIONS.VALIDATE, OPTIONS.VALIDATE_ATTITUDES_AND_BEHAVIORS,
      ]
    },
    {
      name: 'USER_PERSONAS',
      options: [
        SECONDARY_OPTIONS.REMOTE.value, SECONDARY_OPTIONS.IN_PERSON.value,
        OPTIONS.MY_USERS, OPTIONS.GENERATE, OPTIONS.GENERATE_ATTITUDES_AND_BEHAVIORS,
        OPTIONS.VALIDATE, OPTIONS.VALIDATE_ATTITUDES_AND_BEHAVIORS,
      ]
    },
    {
      name: 'REMOTE_USER_INTERVIEWS',
      options: [
        SECONDARY_OPTIONS.REMOTE.value,
        OPTIONS.MY_USERS, OPTIONS.VALIDATE, OPTIONS.VALIDATE_ATTITUDES,
      ]
    },
    {
      name: 'SURVEYS',
      options: [
        SECONDARY_OPTIONS.REMOTE.value,
        OPTIONS.MY_USERS, OPTIONS.VALIDATE, OPTIONS.VALIDATE_ATTITUDES,
        OPTIONS.MY_SERVICE, OPTIONS.ASSESSING, OPTIONS.ASSESSING_WHY
      ]
    },
    {
      name: 'ANALYTICS',
      options: [
        SECONDARY_OPTIONS.REMOTE.value, SECONDARY_OPTIONS.IN_PERSON.value,
        OPTIONS.MY_USERS, OPTIONS.VALIDATE, OPTIONS.VALIDATE_BEHAVIORS,
      ]
    },
    {
      name: 'SUPPORT_CALL_MONITORING',
      options: [
        SECONDARY_OPTIONS.REMOTE.value, SECONDARY_OPTIONS.IN_PERSON.value,
        OPTIONS.MY_USERS, OPTIONS.VALIDATE, OPTIONS.VALIDATE_BEHAVIORS,
      ]
    },
    {
      name: 'DESIRABILITY_STUDY',
      options: [
        SECONDARY_OPTIONS.IN_PERSON.value,
        OPTIONS.MY_SERVICE, OPTIONS.STRATEGIZING, OPTIONS.STRATEGIZING_ATTITUDES,
      ]
    },

    {
      name: 'FIVE_SECOND_TEST',
      options: [
        SECONDARY_OPTIONS.REMOTE.value, SECONDARY_OPTIONS.IN_PERSON.value,
        OPTIONS.MY_SERVICE, OPTIONS.EXECUTING, OPTIONS.EXECUTING_ATTITUDES,
      ]
    },

    {
      name: 'FIRST_CLICK_TEST',
      options: [
        SECONDARY_OPTIONS.REMOTE.value, SECONDARY_OPTIONS.IN_PERSON.value,
        OPTIONS.MY_SERVICE, OPTIONS.EXECUTING, OPTIONS.EXECUTING_BEHAVIORS,
      ]
    },
    {
      name: 'CARD_SORTING',
      options: [
        SECONDARY_OPTIONS.REMOTE.value, SECONDARY_OPTIONS.IN_PERSON.value,
        OPTIONS.MY_SERVICE, OPTIONS.EXECUTING, OPTIONS.EXECUTING_BEHAVIORS,
      ]
    },

    {
      name: 'TREE_TESTING',
      options: [
        SECONDARY_OPTIONS.REMOTE.value, SECONDARY_OPTIONS.IN_PERSON.value,
        OPTIONS.MY_SERVICE, OPTIONS.EXECUTING, OPTIONS.EXECUTING_BEHAVIORS,
      ]
    },

    {
      name: 'PROTOTYPE_TESTING',
      options: [
        SECONDARY_OPTIONS.REMOTE.value, SECONDARY_OPTIONS.IN_PERSON.value,
        OPTIONS.MY_SERVICE, OPTIONS.EXECUTING, OPTIONS.EXECUTING_BEHAVIORS,
      ]
    },
    {
      name: 'AB_TESTING',
      options: [
        SECONDARY_OPTIONS.REMOTE.value, SECONDARY_OPTIONS.IN_PERSON.value,
        OPTIONS.MY_SERVICE, OPTIONS.ASSESSING, OPTIONS.ASSESSING_WHAT
      ]
    },

    {
      name: 'ACCESSIBILITY_EVALUATION',
      options: [
        SECONDARY_OPTIONS.REMOTE.value, SECONDARY_OPTIONS.IN_PERSON.value,
        OPTIONS.MY_SERVICE, OPTIONS.ASSESSING, OPTIONS.ASSESSING_WHAT
      ]
    },

    // {
    //   name: 'HEAT_MAP',
    //   options: [
    //     SECONDARY_OPTIONS.REMOTE.value, SECONDARY_OPTIONS.IN_PERSON.value,
    //     OPTIONS.MY_SERVICE, OPTIONS.ASSESSING, OPTIONS.ASSESSING_WHAT
    //   ]
    // },
    {
      name: 'SEARCH_LOG_ANALYSIS',
      options: [
        SECONDARY_OPTIONS.REMOTE.value, SECONDARY_OPTIONS.IN_PERSON.value,
        OPTIONS.MY_SERVICE, OPTIONS.ASSESSING, OPTIONS.ASSESSING_WHAT
      ]
    },

    {
      name: 'SOCIAL_MEDIA_MONITORING',
      options: [
        SECONDARY_OPTIONS.REMOTE.value, SECONDARY_OPTIONS.IN_PERSON.value,
        OPTIONS.MY_SERVICE, OPTIONS.ASSESSING, OPTIONS.ASSESSING_WHAT
      ]
    },

    {
      name: 'WEBSITE_ANALYTICS',
      options: [
        SECONDARY_OPTIONS.REMOTE.value, SECONDARY_OPTIONS.IN_PERSON.value,
        OPTIONS.MY_SERVICE, OPTIONS.ASSESSING, OPTIONS.ASSESSING_WHAT
      ]
    },
    {
      name: 'USABILITY_STUDY',
      options: [
        SECONDARY_OPTIONS.REMOTE.value, SECONDARY_OPTIONS.IN_PERSON.value,
        OPTIONS.MY_SERVICE, OPTIONS.ASSESSING, OPTIONS.ASSESSING_WHY
      ]
    },

    {
      name: 'HEURISTIC_EVALUATION',
      options: [
        SECONDARY_OPTIONS.REMOTE.value,
        OPTIONS.MY_SERVICE, OPTIONS.ASSESSING, OPTIONS.ASSESSING_WHY
      ]
    },

    {
      name: 'INTERCEPT_SURVEYS',
      options: [
        SECONDARY_OPTIONS.REMOTE.value,
        OPTIONS.MY_SERVICE, OPTIONS.ASSESSING, OPTIONS.ASSESSING_WHY
      ]
    },

    {
      name: 'TRUE_INTENT_TESTING',
      options: [
        SECONDARY_OPTIONS.REMOTE.value,
        OPTIONS.MY_SERVICE, OPTIONS.ASSESSING, OPTIONS.ASSESSING_WHY
      ]
    },
  ];

  const SLIDE_1 = {
    title: 'I want to learn about',
    type: 'radio',
    options: [
      {
        mainText: 'My Users',
        subText: `their needs, goals, behaviors, habits, frustrations, pain points, etc.`,
        icon: 'fas fa-4x fa-users text-gray',
        value: OPTIONS.MY_USERS
      },
      {
        mainText: 'My Service',
        subText: 'how my product performs when placed in front of a user.',
        icon: 'fas fa-4x fa-cogs text-gray',
        value: OPTIONS.MY_SERVICE
      }
    ]
  };

  /** JS object that has all the information needed to generate 2nd survey slide.
   * Based on the option value the user selects for SLIDE_1, we use the corresponding object
   * that helps render the 2nd slide (e.g. If the user selects "MY_USERS" on slide 1, then we will
   * return SLIDE_2[selectedOption] with "selectedOption" being "OPTIONS.MY_USERS".
   */
  const SLIDE_2 = {
    [OPTIONS.MY_USERS]: {
      title: 'I want to',
      type: 'radio',
      options: [
        {
          mainText: 'Generate new ideas',
          subText: 'gain insight about who your users really are and their experiences and use that insight to come up with new features and services',
          value: OPTIONS.GENERATE,
          icon: 'fas fa-4x fa-rocket text-gray',
        },
        {
          mainText: 'Validate existing ideas',
          subText: `find out if your ideas are valid <br/><br/><br/><br/>`,
          value: OPTIONS.VALIDATE,
          icon: 'fas fa-4x fa-clipboard-check text-gray',
        }
      ]
    },
    [OPTIONS.MY_SERVICE]: {
      title: 'I am in the phase of',
      type: 'radio',
      options: [
        {
          mainText: 'Strategizing',
          subText: 'I am designing a new service/feature',
          value: OPTIONS.STRATEGIZING,
          icon: 'fas fa-3x fa-chess text-gray',
        },
        {
          mainText: 'Executing',
          subText: 'I want to test a new service/feature',
          value: OPTIONS.EXECUTING,
          icon: 'fas fa-3x fa-flask text-gray',
        },
        {
          mainText: 'Assessing',
          subText: 'My service is available for use',
          value: OPTIONS.ASSESSING,
          icon: 'fas fa-3x fa-search text-gray',
        }
      ]
    }
  };

  /**
   * JS object that has all the information needed to generate 3rd survey slide.
   * NOTE: the HTML line break tags (i.e. "<br>") in "subText" field are used to align
   * the check box for all option cards.
   */
  const SLIDE_3 = {
    [OPTIONS.GENERATE]: {
      title: 'I am interested in',
      type: 'radio',
      options: [
        {
          mainText: 'Attitudes',
          subText: 'what my users say<br/><br/><br/><br/>',
          value: OPTIONS.GENERATE_ATTITUDES,
          icon: ICONS.ATTITUDE,
        },
        {
          mainText: 'Behaviors',
          subText: 'what my users do<br/><br/><br/><br/>',
          value: OPTIONS.GENERATE_BEHAVIORS,
          icon: ICONS.BEHAVIOR,
        },
        {
          mainText: 'Attitudes & Behaviors',
          subText: 'what my users say and do',
          value: OPTIONS.GENERATE_ATTITUDES_AND_BEHAVIORS,
          icon: ICONS.ATTITUDE_AND_BEHAVIOR,
        }
      ]
    },
    [OPTIONS.VALIDATE]: {
      title: 'I am interested in',
      type: 'radio',
      options: [
        {
          mainText: 'Attitudes',
          subText: 'what my users say',
          value: OPTIONS.VALIDATE_ATTITUDES,
          icon: ICONS.ATTITUDE,
        },
        {
          mainText: 'Behaviors',
          subText: 'what my users do',
          value: OPTIONS.VALIDATE_BEHAVIORS,
          icon: ICONS.BEHAVIOR,
        },
        {
          mainText: 'Attitudes & Behaviors',
          subText: 'what my users say and do',
          value: OPTIONS.VALIDATE_ATTITUDES_AND_BEHAVIORS,
          icon: ICONS.ATTITUDE_AND_BEHAVIOR,
        }
      ]
    },
    [OPTIONS.STRATEGIZING]: {
      title: 'I am interested in',
      type: 'radio',
      options: [
        {
          mainText: 'Attitudes',
          subText: 'What my users think about the new service/feature',
          value: OPTIONS.STRATEGIZING_ATTITUDES,
          icon: ICONS.ATTITUDE,
        },
        {
          mainText: 'Behaviors',
          subText: 'How my users would use the new service/feature',
          value: OPTIONS.STRATEGIZING_BEHAVIORS,
          icon: ICONS.BEHAVIOR,
        },
      ]
    },
    [OPTIONS.EXECUTING]: {
      title: 'I am interested in',
      type: 'radio',
      options: [
        {
          mainText: 'Attitudes',
          subText: 'What my users say about the new service/feature',
          value: OPTIONS.EXECUTING_ATTITUDES,
          icon: ICONS.ATTITUDE,
        },
        {
          mainText: 'Behaviors',
          subText: 'How my users use the new service/feature',
          value: OPTIONS.EXECUTING_BEHAVIORS,
          icon: ICONS.BEHAVIOR,
        },
      ]
    },
    [OPTIONS.ASSESSING]: {
      title: 'I am interested in',
      type: 'radio',
      options: [
        {
          mainText: 'What is happening',
          subText: 'how much, how many',
          value: OPTIONS.ASSESSING_WHAT,
          icon: '<i class="fas fa-4x fa-chart-line text-gray"></i>',
        },
        {
          mainText: 'Why is it happening',
          subText: 'how to fix it',
          value: OPTIONS.ASSESSING_WHY,
          icon: '<i class="fas fa-4x fa-wrench text-gray"></i>',
        },
      ]
    },
  };

  // JS object that has all the information needed to generate 3rd survey slide.
  const SLIDE_4 = {
    [OPTIONS.GENERATE_ATTITUDES]: {
      title: 'I want to conduct',
      type: 'radio',
      options: {
        [SECONDARY_OPTIONS.REMOTE.value]: {
          mainText: SECONDARY_OPTIONS.REMOTE.label,
          value: SECONDARY_OPTIONS.REMOTE.value,
          results: [RESEARCH_METHODS.FOCUS_GROUPS, RESEARCH_METHODS.INTERVIEWS],
          icon: SECONDARY_OPTIONS.REMOTE.icon,
        },
        [SECONDARY_OPTIONS.IN_PERSON.value]: {
          mainText: SECONDARY_OPTIONS.IN_PERSON.label,
          value: SECONDARY_OPTIONS.IN_PERSON.value,
          results: [RESEARCH_METHODS.FOCUS_GROUPS, RESEARCH_METHODS.INTERVIEWS,
            RESEARCH_METHODS.CONTEXTUAL_INQUIRY],
          icon: SECONDARY_OPTIONS.IN_PERSON.icon,
        }
      },
    },
    [OPTIONS.GENERATE_BEHAVIORS]: {
      title: 'I want to conduct',
      type: 'radio',
      options: {
        [SECONDARY_OPTIONS.REMOTE.value]: {
          mainText: SECONDARY_OPTIONS.REMOTE.label,
          value: SECONDARY_OPTIONS.REMOTE.value,
          results: [RESEARCH_METHODS.DIARY_STUDIES],
          icon: SECONDARY_OPTIONS.REMOTE.icon,
        },
        [SECONDARY_OPTIONS.IN_PERSON.value]: {
          mainText: SECONDARY_OPTIONS.IN_PERSON.label,
          value: SECONDARY_OPTIONS.IN_PERSON.value,
          results: [RESEARCH_METHODS.ETHNOGRAPHIC_FIELD_STUDIES],
          icon: SECONDARY_OPTIONS.IN_PERSON.icon,
        }
      },
    },
    [OPTIONS.GENERATE_ATTITUDES_AND_BEHAVIORS]: {
      title: 'I want to conduct',
      type: 'radio',
      options: {
        [SECONDARY_OPTIONS.REMOTE.value]: {
          mainText: SECONDARY_OPTIONS.REMOTE.label,
          value: SECONDARY_OPTIONS.REMOTE.value,
          results: [RESEARCH_METHODS.DIARY_STUDIES, RESEARCH_METHODS.JOURNEY_MAPPING,
            RESEARCH_METHODS.USER_PERSONAS],
          icon: SECONDARY_OPTIONS.REMOTE.icon,
        },
        [SECONDARY_OPTIONS.IN_PERSON.value]: {
          mainText: SECONDARY_OPTIONS.IN_PERSON.label,
          value: SECONDARY_OPTIONS.IN_PERSON.value,
          results: [RESEARCH_METHODS.CONTEXTUAL_INQUIRY, RESEARCH_METHODS.JOURNEY_MAPPING,
            RESEARCH_METHODS.USER_PERSONAS],
          icon: SECONDARY_OPTIONS.IN_PERSON.icon,
        }
      },
    },
    [OPTIONS.VALIDATE_ATTITUDES]: {
      title: 'I want to conduct',
      type: 'radio',
      options: {
        [SECONDARY_OPTIONS.REMOTE.value]: {
          mainText: SECONDARY_OPTIONS.REMOTE.label,
          value: SECONDARY_OPTIONS.REMOTE.value,
          results: [RESEARCH_METHODS.REMOTE_USER_INTERVIEWS,
            RESEARCH_METHODS.FOCUS_GROUPS,
            RESEARCH_METHODS.SURVEYS],
          icon: SECONDARY_OPTIONS.REMOTE.icon,
        },
        [SECONDARY_OPTIONS.IN_PERSON.value]: {
          mainText: SECONDARY_OPTIONS.IN_PERSON.label,
          value: SECONDARY_OPTIONS.IN_PERSON.value,
          results: [RESEARCH_METHODS.USER_INTERVIEW, RESEARCH_METHODS.FOCUS_GROUPS,
            RESEARCH_METHODS.SURVEYS],
          icon: SECONDARY_OPTIONS.IN_PERSON.icon,
        }
      },
    },
    [OPTIONS.VALIDATE_BEHAVIORS]: {
      title: 'I want to conduct',
      type: 'radio',
      options: {
        [SECONDARY_OPTIONS.REMOTE.value]: {
          mainText: SECONDARY_OPTIONS.REMOTE.label,
          value: SECONDARY_OPTIONS.REMOTE.value,
          results: [RESEARCH_METHODS.ANALYTICS, RESEARCH_METHODS.EXISTING_DATA,
            RESEARCH_METHODS.SUPPORT_CALL_MONITORING],
          icon: SECONDARY_OPTIONS.REMOTE.icon,
        },
        [SECONDARY_OPTIONS.IN_PERSON.value]: {
          mainText: SECONDARY_OPTIONS.IN_PERSON.label,
          value: SECONDARY_OPTIONS.IN_PERSON.value,
          results: [RESEARCH_METHODS.ANALYTICS, RESEARCH_METHODS.EXISTING_DATA,
            RESEARCH_METHODS.SUPPORT_CALL_MONITORING],
          icon: SECONDARY_OPTIONS.IN_PERSON.icon,
        }
      },
    },
    [OPTIONS.VALIDATE_ATTITUDES_AND_BEHAVIORS]: {
      title: 'I want to conduct',
      type: 'radio',
      options: {
        [SECONDARY_OPTIONS.REMOTE.value]: {
          mainText: SECONDARY_OPTIONS.REMOTE.label,
          value: SECONDARY_OPTIONS.REMOTE.value,
          results: [RESEARCH_METHODS.JOURNEY_MAPPING, RESEARCH_METHODS.USER_PERSONAS],
          icon: SECONDARY_OPTIONS.REMOTE.icon,
        },
        [SECONDARY_OPTIONS.IN_PERSON.value]: {
          mainText: SECONDARY_OPTIONS.IN_PERSON.label,
          value: SECONDARY_OPTIONS.IN_PERSON.value,
          results: [RESEARCH_METHODS.JOURNEY_MAPPING, RESEARCH_METHODS.USER_PERSONAS],
          icon: SECONDARY_OPTIONS.IN_PERSON.icon,
        }
      },
    },
    [OPTIONS.STRATEGIZING_ATTITUDES]: {
      title: 'I want to conduct',
      type: 'radio',
      options: {
        [SECONDARY_OPTIONS.REMOTE.value]: {
          mainText: SECONDARY_OPTIONS.REMOTE.label,
          value: SECONDARY_OPTIONS.REMOTE.value,
          results: [RESEARCH_METHODS.FOCUS_GROUPS, RESEARCH_METHODS.INTERVIEWS],
          icon: SECONDARY_OPTIONS.REMOTE.icon,
        },
        [SECONDARY_OPTIONS.IN_PERSON.value]: {
          mainText: SECONDARY_OPTIONS.IN_PERSON.label,
          value: SECONDARY_OPTIONS.IN_PERSON.value,
          results: [RESEARCH_METHODS.CONTEXTUAL_INQUIRY,
            RESEARCH_METHODS.DESIRABILITY_STUDY, RESEARCH_METHODS.FOCUS_GROUPS,
            RESEARCH_METHODS.INTERVIEWS],
          icon: SECONDARY_OPTIONS.IN_PERSON.icon,
        }
      },
    },
    [OPTIONS.STRATEGIZING_BEHAVIORS]: {
      title: 'I want to conduct',
      type: 'radio',
      options: {
        [SECONDARY_OPTIONS.REMOTE.value]: {
          mainText: SECONDARY_OPTIONS.REMOTE.label,
          value: SECONDARY_OPTIONS.REMOTE.value,
          results: [RESEARCH_METHODS.DIARY_STUDIES],
          icon: SECONDARY_OPTIONS.REMOTE.icon,
        },
        [SECONDARY_OPTIONS.IN_PERSON.value]: {
          mainText: SECONDARY_OPTIONS.IN_PERSON.label,
          value: SECONDARY_OPTIONS.IN_PERSON.value,
          results: [RESEARCH_METHODS.CONTEXTUAL_INQUIRY],
          icon: SECONDARY_OPTIONS.IN_PERSON.icon,
        }
      },
    },
    [OPTIONS.EXECUTING_ATTITUDES]: {
      title: 'I want to conduct',
      type: 'radio',
      options: {
        [SECONDARY_OPTIONS.REMOTE.value]: {
          mainText: SECONDARY_OPTIONS.REMOTE.label,
          value: SECONDARY_OPTIONS.REMOTE.value,
          results: [RESEARCH_METHODS.FIVE_SECOND_TEST, RESEARCH_METHODS.FOCUS_GROUPS,
            RESEARCH_METHODS.INTERVIEWS],
          icon: SECONDARY_OPTIONS.REMOTE.icon,
        },
        [SECONDARY_OPTIONS.IN_PERSON.value]: {
          mainText: SECONDARY_OPTIONS.IN_PERSON.label,
          value: SECONDARY_OPTIONS.IN_PERSON.value,
          results: [RESEARCH_METHODS.FIVE_SECOND_TEST, RESEARCH_METHODS.FOCUS_GROUPS,
            RESEARCH_METHODS.INTERVIEWS],
          icon: SECONDARY_OPTIONS.IN_PERSON.icon,
        }
      },
    },
    [OPTIONS.EXECUTING_BEHAVIORS]: {
      title: 'I want to conduct',
      type: 'radio',
      options: {
        [SECONDARY_OPTIONS.REMOTE.value]: {
          mainText: SECONDARY_OPTIONS.REMOTE.label,
          value: SECONDARY_OPTIONS.REMOTE.value,
          results: [RESEARCH_METHODS.FIRST_CLICK_TEST, RESEARCH_METHODS.CARD_SORTING,
            RESEARCH_METHODS.TREE_TESTING, RESEARCH_METHODS.PROTOTYPE_TESTING],
          icon: SECONDARY_OPTIONS.REMOTE.icon,
        },
        [SECONDARY_OPTIONS.IN_PERSON.value]: {
          mainText: SECONDARY_OPTIONS.IN_PERSON.label,
          value: SECONDARY_OPTIONS.IN_PERSON.value,
          results: [RESEARCH_METHODS.FIRST_CLICK_TEST, RESEARCH_METHODS.CARD_SORTING,
            RESEARCH_METHODS.TREE_TESTING, RESEARCH_METHODS.PROTOTYPE_TESTING],
          icon: SECONDARY_OPTIONS.IN_PERSON.icon,
        }
      },
    },
    [OPTIONS.ASSESSING_WHAT]: {
      title: 'I want to conduct',
      type: 'radio',
      options: {
        [SECONDARY_OPTIONS.REMOTE.value]: {
          mainText: SECONDARY_OPTIONS.REMOTE.label,
          value: SECONDARY_OPTIONS.REMOTE.value,
          results: [RESEARCH_METHODS.AB_TESTING,
            RESEARCH_METHODS.ACCESSIBILITY_EVALUATION,
            RESEARCH_METHODS.FIRST_CLICK_TEST,
            RESEARCH_METHODS.SEARCH_LOG_ANALYSIS,
            RESEARCH_METHODS.SOCIAL_MEDIA_MONITORING,
            RESEARCH_METHODS.WEBSITE_ANALYTICS],
          icon: SECONDARY_OPTIONS.REMOTE.icon,
        },
        [SECONDARY_OPTIONS.IN_PERSON.value]: {
          mainText: SECONDARY_OPTIONS.IN_PERSON.label,
          value: SECONDARY_OPTIONS.IN_PERSON.value,
          results: [RESEARCH_METHODS.AB_TESTING,
            RESEARCH_METHODS.ACCESSIBILITY_EVALUATION,
            RESEARCH_METHODS.FIRST_CLICK_TEST,
            RESEARCH_METHODS.SEARCH_LOG_ANALYSIS,
            RESEARCH_METHODS.SOCIAL_MEDIA_MONITORING,
            RESEARCH_METHODS.WEBSITE_ANALYTICS],
          icon: SECONDARY_OPTIONS.IN_PERSON.icon,
        }
      },
    },
    [OPTIONS.ASSESSING_WHY]: {
      title: 'I want to conduct',
      type: 'radio',
      options: {
        [SECONDARY_OPTIONS.REMOTE.value]: {
          mainText: SECONDARY_OPTIONS.REMOTE.label,
          value: SECONDARY_OPTIONS.REMOTE.value,
          results: [RESEARCH_METHODS.USABILITY_STUDY,
            RESEARCH_METHODS.HEURISTIC_EVALUATION,
            RESEARCH_METHODS.SURVEYS, RESEARCH_METHODS.INTERVIEWS,
            RESEARCH_METHODS.INTERCEPT_SURVEYS, RESEARCH_METHODS.TRUE_INTENT_TESTING],
          icon: SECONDARY_OPTIONS.REMOTE.icon,
        },
        [SECONDARY_OPTIONS.IN_PERSON.value]: {
          mainText: SECONDARY_OPTIONS.IN_PERSON.label,
          value: SECONDARY_OPTIONS.IN_PERSON.value,
          results: [RESEARCH_METHODS.USABILITY_STUDY],
          icon: SECONDARY_OPTIONS.IN_PERSON.icon,
        }
      },
    },
  };

  // Holds all the options the user has selected so far.
  let userSelectedOptions = [];

  /** Used to backup the "userSelectedOptions" before "submitting" the survey.
   * If the user changes their survey response on the results page, then "modifies their response",
   * we need to show their old survey response so we can generate correct recommendations.
   * Currently, it is not possible to sync the response selected in the results page with the response
   * selected in the survey slides.
   */
  let userSelectedOptionsOld = [];

  /**
   * Set the "visibility" property of a DOM element.
   * @param elementId id of the DOM element.
   * @param isVisible boolean value that determines visibility property of the given element.
   */
  const setVisibility = (elementId, isVisible) => {
    const element = document.getElementById(elementId);
    if(element) {
      element.style.visibility = isVisible ? 'visible' : 'hidden';
    }
  };

  /**
   * Set the "display" property of a DOM element.
   * @param elementId id of the DOM element.
   * @param display boolean value that determines display property of the given element.
   */
  const setDisplay = (elementId, display) => {
    const element = document.getElementById(elementId)
    if(element) {
      element.style.display = display ? 'block' : 'none';
    }
  };

  /**
   * Generates a list of suggested UX Research methods.
   * The suggestion algorithm will check if the "userSelectedOptions" array is a subset of
   * the "options" array for each UX Research method. If so, then that UX Research method will be
   * rendered on the results page.
   */
  const getFinalResult = () => {
    return RESEARCH_METHODS_WITH_OPTIONS.reduce((result, method) => {
      if (userSelectedOptions.every(option => method.options.includes(option))) {
        result.push(method.name);
      }
      return result;
    }, []);
  };

  /**
   * Gets the radio value selected for the given survey slide.
   * @param name name of the radio element (e.g. "SLIDE_1")
   */
  const getRadioVal = (name) => {
    const ele = document.getElementsByName(name);
    if (!ele) return null;

    for (let i = 0; i < ele.length; i++) {
      if (ele[i].checked) {
        return ele[i].value;
      }
    }

    return null; // if no value is selected
  };

  /**
   * Render the 2nd slide.
   * This function is called when the user selects an option on slide 1.
   */
  function buildSlide2 () {

    setVisibility('SLIDE1_Next', true);
    setDisplay('selected-option-div', true);
    setVisibility('my-results', true);

    const selectedOption = getRadioVal('SLIDE_1');
    userSelectedOptions[0] = selectedOption;

    const selectedOptionDiv = document.getElementById('selected-option-1');
    const mainText = SLIDE_1.title + ': ';

    const options = SLIDE_1.options.map(option => {
      const isSelected = option.value === selectedOption;
      return `<span class="badge badge-pill py-2 px-3 my-1 mr-2 ${isSelected ? 'badge-primary'
        : 'badge-light'}" style="font-size: 70%; background-color: ${isSelected ? 'var(--vt-burntOrange)'
        : ''}">${option.mainText}</span>`;
    });
    selectedOptionDiv.innerHTML =
      `<strong style="float: left; width: 215px; clear: both">${mainText}</strong><span>${options.join('')}</span>`;

    const answers = SLIDE_2[selectedOption].options.map(option => {
      return `<div class="radio-item col mx-2 p-0">
      <input class="surveyInput" type="radio" id="SLIDE2_${option.value}" name="SLIDE_2" value="${option.value}">
      <label style="max-width: 350px" for="SLIDE2_${option.value}">
         <div  style="text-align: center" class="mb-3"><i class="${option.icon}"></i></div>
         <h4 style="text-align: center">${option.mainText}</h4>
         <p>${option.subText}</p>
         <div class="select-button" style="margin: 0 auto;">
            <svg viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg" svg-inline="" role="presentation" focusable="false" tabindex="-1" class="fill-current icon-12 text-white" style="display: none" >
               <path d="M11.568.284a1.184 1.184 0 00-1.69.157l-5.31 6.501-2.703-1.838a1.185 1.185 0 00-1.664.34A1.24 1.24 0 00.534 7.14l4.497 3.06 6.691-8.193a1.242 1.242 0 00-.154-1.724z"></path>
            </svg>
         </div>
      </label>
   </div>`;
    });

    slide2Div.innerHTML = `<div id="SLIDE_2">
            <div id="top-heading">
              <div class="question d-flex align-content-center justify-content-center mb-4">
                 <h2 class="d-inline mx-4 mb-0">${SLIDE_2[selectedOption].title}</h2>
               </div>
            </div>
            <div class="answers">
              <section class="row">
                  ${answers.join('')}
              </section>
            </div>
      <div class="text-center mt-3 d-flex justify-content-between">
      <button class="bg-primary p-2 px-3 m-0 costume-btn" id="SLIDE2_Prev"><i class="fa fa-arrow-left"></i></button>
      <button class="bg-primary p-2 px-3 m-0 costume-btn" style="visibility: hidden" id="SLIDE2_Next"><i class="fa fa-arrow-right"></i></button>
      </div>

      </div>`;

    // Slide 2 buttons
    document.getElementById('SLIDE2_Prev').addEventListener('click', function () {
      showPreviousSlide();
    });

    document.getElementById('SLIDE2_Next').addEventListener('click', function () {
      showNextSlide();
    });

    setRadioOnClick('SLIDE_2', buildSlide3);

  }

  // Render slide 1.
  const buildSlide1 = () => {

    const answers = SLIDE_1.options.map(option => {
      return `<div class="radio-item col">
      <input class="surveyInput" type="radio" id="SLIDE1_${option.value}" name="SLIDE_1" value="${option.value}">
      <label style="max-width: 350px; display: flex; flex-direction: column; justify-content: space-between;" for="SLIDE1_${option.value}">
      <div>
      <div  style="text-align: center" class="mb-3"><i class="${option.icon}"></i></div>
      <h4 style="text-align: center">${option.mainText}</h4>
      <p>${option.subText}</p>
      </div>
      <div style="display: flex; justify-content: center">
      <div class="select-button">
      <svg viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg" svg-inline="" role="presentation" focusable="false" tabindex="-1" class="fill-current icon-12 text-white" style="display: none" >
      <path d="M11.568.284a1.184 1.184 0 00-1.69.157l-5.31 6.501-2.703-1.838a1.185 1.185 0 00-1.664.34A1.24 1.24 0 00.534 7.14l4.497 3.06 6.691-8.193a1.242 1.242 0 00-.154-1.724z"></path>
      </svg>
      </div>
      </div>

      </label>
      </div>`;
    });

    slide1Div.innerHTML = `<div id="SLIDE_1">
      <div id="top-heading">
      <div class="question d-flex align-content-center justify-content-center mb-4">
      <h2 class="d-inline mr-4 mb-0">${SLIDE_1.title}</h2>
      </div>
      </div>
      <div class="answers">
      <section class="row">
      ${answers.join('')}
      </section>
      </div>
      <div class="text-center mt-3 d-flex justify-content-between">
      <button class="bg-primary p-2 px-3 m-0 costume-btn" style="visibility: hidden"><i class="fa fa-arrow-left"></i></button>
      <button class="bg-primary p-2 px-3 m-0 costume-btn" style="visibility: hidden" id="SLIDE1_Next"><i class="fa fa-arrow-right"></i></button>
      </div>
      </div>`;

    // Slide 1 Buttons
    document.getElementById('SLIDE1_Next').addEventListener('click', function () {
      showNextSlide();
    });

    setRadioOnClick('SLIDE_1', buildSlide2);

  };

  /**
   * Binds the "buildSlide#" function to radio options for each slide.
   * If the selected option is either "validateBehaviors" or "assessingWhat",
   * then render the results page right away instead of rendering the 4th slide.
   * @param name
   * @param buildFunc
   */
  const setRadioOnClick = (name, buildFunc) => {
    const radios = document.getElementsByName(name);
    for (let i = 0, max = radios.length; i < max; i++) {
      const radioVal = radios[i].value;
      if (radioVal === 'validateBehaviors' || radioVal === 'assessingWhat') {
        console.log({ radioVal });
        radios[i].onclick = slide3PreResults;

      } else {
        radios[i].onclick = buildFunc;
      }

    }

  };

  // Renders the results page after doing some clean-ups that are specific to slide 3.
  const slide3PreResults = () => {
    setVisibility('SLIDE3_Next', true);
    const selectedOption = getRadioVal('SLIDE_3');
    userSelectedOptions[2] = selectedOption;
    // generate selected option for slide 3
    generateSlide3SelectedOptDiv(selectedOption);
    // generate the results page
    buildResult();
    // set the "next" button to go to the results page (e.g. "SLIDE3_NEXT")
    document.getElementById('SLIDE3_Next').addEventListener('click', () => {
      setDisplay('selected-option-div', false);
      // Backup the userSelectedOptions since we're about to visit the results page.
      userSelectedOptionsOld = [...userSelectedOptions];
      setVisibility('my-results', false);
      showSlide(5);
    });
  };

  const generateSlide3SelectedOptDiv = (selectedOption) => {
    const selectedOptionSlide2 = getRadioVal('SLIDE_2');

    const selectedOptionDiv = document.getElementById('selected-option-3');

    const mainText = SLIDE_3[selectedOptionSlide2].title + ': ';
    const options = SLIDE_3[selectedOptionSlide2].options.map(option => {
      const isSelected = option.value === selectedOption;
      return `<span class="badge badge-pill py-2 px-3 my-1 mr-2 ${isSelected ? 'badge-primary'
        : 'badge-light'}" style="font-size: 70%; background-color: ${isSelected ? 'var(--vt-burntOrange)'
        : ''}">${option.mainText}</span>`;
    });
    selectedOptionDiv.innerHTML =
      `<strong style="float: left; width: 215px; clear: both">${mainText}</strong><span>${options.join('')}</span>`;
  };

  /**
   * Clears the selected option section.
   */
  const clearSelectedOptions = () => {
    const selectOptionDivs = document.querySelectorAll('.selected-option');
    selectOptionDivs.forEach(option => option.innerHTML = '');
  };

  // Render slide 3.
  const buildSlide3 = () => {
    setVisibility('SLIDE2_Next', true);
    // document.getElementById('step-3').classList.remove('disabled-progress');

    const selectedOption = getRadioVal('SLIDE_2');
    userSelectedOptions[1] = selectedOption;
    const selectedOptionSlide1 = getRadioVal('SLIDE_1');

    const selectedOptionDiv = document.getElementById('selected-option-2');
    const mainText = SLIDE_2[selectedOptionSlide1].title + ': ';
    const options = SLIDE_2[selectedOptionSlide1].options.map(option => {
      const isSelected = option.value === selectedOption;
      return `<span class="badge badge-pill py-2 px-3 my-1 mr-2 ${isSelected ? 'badge-primary'
        : 'badge-light'}" style="font-size: 70%; background-color: ${isSelected ? 'var(--vt-burntOrange)'
        : ''}">${option.mainText}</span>`;
    });
    selectedOptionDiv.innerHTML =
      `<strong style="float: left; width: 215px; clear: both">${mainText}</strong><span>${options.join('')}</span>`;

    const answers = SLIDE_3[selectedOption].options.map(option => {
      return `<div class="radio-item col">
      <input class="surveyInput" type="radio" id="SLIDE3_${option.value}" name="SLIDE_3" value="${option.value}">
      <label style="max-width: 350px" for="SLIDE3_${option.value}">
      <div  style="text-align: center" class="mb-3">${option.icon}</div>
      <h4 style="text-align: center">${option.mainText}</h4>
      <p>${option.subText}</p>
      <div class="select-button" style="margin: 0 auto;">
      <svg viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg" svg-inline="" role="presentation" focusable="false" tabindex="-1" class="fill-current icon-12 text-white" style="display: none" >
      <path d="M11.568.284a1.184 1.184 0 00-1.69.157l-5.31 6.501-2.703-1.838a1.185 1.185 0 00-1.664.34A1.24 1.24 0 00.534 7.14l4.497 3.06 6.691-8.193a1.242 1.242 0 00-.154-1.724z"></path>
      </svg>
      </div>
      </label>
      </div>`;
    });

    slide3Div.innerHTML = `<div id="SLIDE_3">
      <div id="top-heading">

      <div class="question d-flex align-content-center justify-content-center mb-4">
      <h2 class="d-inline mx-4 mb-0">${SLIDE_3[selectedOption].title}</h2>
      </div>
      </div>
      <div class="answers">
      <section class="row">
      ${answers.join('')}
      </section>
      </div>
      <div class="text-center mt-3 d-flex justify-content-between">
      <button class="bg-primary p-2 px-3 m-0 costume-btn" id="SLIDE3_Prev"><i class="fa fa-arrow-left"></i></button>
      <button class="bg-primary p-2 px-3 m-0 costume-btn" style="visibility: hidden" id="SLIDE3_Next"><i class="fa fa-arrow-right"></i></button>
      </div>
      </div>`;

    // Slide 3 buttons
    document.getElementById('SLIDE3_Prev').addEventListener('click', function () {
      showPreviousSlide();
    });

    document.getElementById('SLIDE3_Next').addEventListener('click', function () {
      showNextSlide();
    });

    setRadioOnClick('SLIDE_3', buildSlide4);
  };

  let final_slide_option;

  // Render slide 4.
  const buildSlide4 = () => {
    setVisibility('SLIDE3_Next', true);

    const selectedOption = getRadioVal('SLIDE_3');
    userSelectedOptions[2] = selectedOption;

    const selectedOptionSlide2 = getRadioVal('SLIDE_2');

    const selectedOptionDiv = document.getElementById('selected-option-3');

    const mainText = SLIDE_3[selectedOptionSlide2].title + ': ';
    const options = SLIDE_3[selectedOptionSlide2].options.map(option => {
      const isSelected = option.value === selectedOption;
      return `<span class="badge badge-pill py-2 px-3 my-1 mr-2 ${isSelected ? 'badge-primary'
        : 'badge-light'}" style="font-size: 70%; background-color: ${isSelected ? 'var(--vt-burntOrange)'
        : ''}">${option.mainText}</span>`;
    });
    selectedOptionDiv.innerHTML =
      `<strong style="float: left; width: 215px; clear: both">${mainText}</strong><span>${options.join('')}</span>`;

    final_slide_option = selectedOption;

    const answers = Object.entries(SLIDE_4[selectedOption].options).map(option => {
      return `<div class="radio-item col">
      <input class="surveyInput" type="radio" id="SLIDE4_${option[1].value}" name="SLIDE_4" value="${option[1].value}">
      <label style="max-width: 350px; height: 10rem" for="SLIDE4_${option[1].value}">
      <div  style="text-align: center" class="mb-3"><i class="${option[1].icon}"></i></div>
      <h4 style="text-align: center">${option[1].mainText}</h4>
      <div class="select-button" style="margin: 0 auto;">
      <svg viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg" svg-inline="" role="presentation" focusable="false" tabindex="-1" class="fill-current icon-12 text-white" style="display: none" >
      <path d="M11.568.284a1.184 1.184 0 00-1.69.157l-5.31 6.501-2.703-1.838a1.185 1.185 0 00-1.664.34A1.24 1.24 0 00.534 7.14l4.497 3.06 6.691-8.193a1.242 1.242 0 00-.154-1.724z"></path>
      </svg>
      </div>
      </label>
      </div>`;
    });

    slide4Div.innerHTML = `<div id="SLIDE_4">
      <div id="top-heading">
      <div class="question d-flex align-content-center justify-content-center mb-4">
      <h2 class="d-inline mx-4 mb-0">${SLIDE_4[selectedOption].title}</h2>
      </div>
      </div>
      <div class="answers">
      <section class="row">
      ${answers.join('')}
      </section>
      </div>

      <div class="text-center mt-3 d-flex justify-content-between">
      <button class="bg-primary p-2 px-3 m-0 costume-btn" id="SLIDE4_Prev"><i class="fa fa-arrow-left"></i></button>
      <button class="bg-primary p-2 px-3 m-0 costume-btn" style="visibility: hidden" id="SLIDE4_Submit">Submit</button>
      </div>
      </div>`;

    // Slide 3 buttons
    document.getElementById('SLIDE4_Prev').addEventListener('click', function () {
      setVisibility('my-results', true);
      setVisibility('SLIDE4_Submit', false);

      showPreviousSlide();
    });

    document.getElementById('SLIDE4_Submit').addEventListener('click', function () {

      userSelectedOptionsOld = [...userSelectedOptions];
      buildResult();

      setDisplay('selected-option-div', false);
      setVisibility('my-results', false);
      showNextSlide();
    });

    setRadioOnClick('SLIDE_4', preBuildResult);

  };

  // JS object that maps selectable option to corresponding question.
  // E.g. MY_USERS --> "I want to learn about"
  const optionToQuestion = {
    [OPTIONS.MY_USERS]: {
      level: 0,
      question: 'I want to learn about',
      otherOptions: [OPTIONS.MY_SERVICE]
    },
    [OPTIONS.MY_SERVICE]: {
      level: 0,
      question: 'I want to learn about',
      otherOptions: [OPTIONS.MY_USERS]
    },
    [OPTIONS.GENERATE]: {
      level: 1,
      question: 'I want to',
      otherOptions: [OPTIONS.VALIDATE]
    },
    [OPTIONS.VALIDATE]: {
      level: 1,
      question: 'I want to',
      otherOptions: [OPTIONS.GENERATE]
    },
    [OPTIONS.STRATEGIZING]: {
      level: 1,
      question: 'I am in the phase of',
      otherOptions: [OPTIONS.EXECUTING, OPTIONS.ASSESSING]
    },
    [OPTIONS.EXECUTING]: {
      level: 1,
      question: 'I am in the phase of',
      otherOptions: [OPTIONS.STRATEGIZING, OPTIONS.ASSESSING]
    },
    [OPTIONS.ASSESSING]: {
      level: 1,
      question: 'I am in the phase of',
      otherOptions: [OPTIONS.STRATEGIZING, OPTIONS.EXECUTING]
    },
    [OPTIONS.GENERATE_ATTITUDES]: {
      level: 2,
      question: 'I am interested in',
      otherOptions: [OPTIONS.GENERATE_BEHAVIORS, OPTIONS.GENERATE_ATTITUDES_AND_BEHAVIORS]
    },
    [OPTIONS.GENERATE_BEHAVIORS]: {
      level: 2,
      question: 'I am interested in',
      otherOptions: [OPTIONS.GENERATE_ATTITUDES, OPTIONS.GENERATE_ATTITUDES_AND_BEHAVIORS]
    },
    [OPTIONS.GENERATE_ATTITUDES_AND_BEHAVIORS]: {
      level: 2,
      question: 'I am interested in',
      otherOptions: [OPTIONS.GENERATE_BEHAVIORS, OPTIONS.GENERATE_ATTITUDES]
    },
    [OPTIONS.VALIDATE_ATTITUDES]: {
      level: 2,
      question: 'I am interested in',
      otherOptions: [OPTIONS.VALIDATE_BEHAVIORS, OPTIONS.VALIDATE_ATTITUDES_AND_BEHAVIORS]
    },
    [OPTIONS.VALIDATE_BEHAVIORS]: {
      level: 2,
      question: 'I am interested in',
      otherOptions: [OPTIONS.VALIDATE_ATTITUDES, OPTIONS.VALIDATE_ATTITUDES_AND_BEHAVIORS]
    },
    [OPTIONS.VALIDATE_ATTITUDES_AND_BEHAVIORS]: {
      level: 2,
      question: 'I am interested in',
      otherOptions: [OPTIONS.VALIDATE_BEHAVIORS, OPTIONS.VALIDATE_ATTITUDES]
    },
    [OPTIONS.STRATEGIZING_ATTITUDES]: {
      level: 2,
      question: 'I am interested in',
      otherOptions: [OPTIONS.STRATEGIZING_BEHAVIORS]
    },
    [OPTIONS.STRATEGIZING_BEHAVIORS]: {
      level: 2,
      question: 'I am interested in',
      otherOptions: [OPTIONS.STRATEGIZING_ATTITUDES]
    },
    [OPTIONS.EXECUTING_ATTITUDES]: {
      level: 2,
      question: 'I am interested in',
      otherOptions: [OPTIONS.EXECUTING_BEHAVIORS]
    },
    [OPTIONS.EXECUTING_BEHAVIORS]: {
      level: 2,
      question: 'I am interested in',
      otherOptions: [OPTIONS.EXECUTING_ATTITUDES]
    },
    [OPTIONS.ASSESSING_WHAT]: {
      level: 2,
      question: 'I am interested in',
      otherOptions: [OPTIONS.ASSESSING_WHY]
    },
    [OPTIONS.ASSESSING_WHY]: {
      level: 2,
      question: 'I am interested in',
      otherOptions: [OPTIONS.ASSESSING_WHAT]
    },
    [SECONDARY_OPTIONS.REMOTE.value]: {
      level: 3,
      question: 'I want to conduct',
      otherOptions: [SECONDARY_OPTIONS.IN_PERSON.value]
    },
    [SECONDARY_OPTIONS.IN_PERSON.value]: {
      level: 3,
      question: 'I want to conduct',
      otherOptions: [SECONDARY_OPTIONS.REMOTE.value]
    }
  };

  // Generate question and other available options based on selected option.
  const generateSelectedOptions = () => {
    const options = userSelectedOptions.map((opt, index) => {
      const { question, otherOptions, level } = optionToQuestion[opt];

      const questionDiv = `<strong style="float: left; width: 215px; clear: both">${question}: </strong>`;
      const selectedOption = `<button data-selected="true" data-level="${level}" data-optionVal="${opt}" class="select-opt level-${level} badge badge-pill py-2 px-3 my-1 mr-2" style="font-size: 70%;">${OPTIONS_WITH_TITLE[opt]}</button>`;
      const otherOptionsDiv = otherOptions.map(otherOpt => {
        return `<button data-selected="false" data-level="${level}" data-optionVal="${otherOpt}" class="select-opt level-${level} badge badge-pill py-2 px-3 my-1 mr-2" style="font-size: 70%;">${OPTIONS_WITH_TITLE[otherOpt]}</button>`;
      });
      return `<div id="results-option-${index}">${questionDiv}<span>${selectedOption}${otherOptionsDiv.join(
        '')}</span></div>`;

    });

    return options.join('');
  };

  /**
   * Perform some pre-processing stuff before rendering the results page.
   */
  const preBuildResult = () => {
    setVisibility('SLIDE4_Submit', true);

    const selectedOption = getRadioVal('SLIDE_4');
    if (selectedOption) {
      userSelectedOptions[3] = selectedOption;
    }

    const selectedOptionDiv = document.getElementById('selected-option-4');

    if (final_slide_option && selectedOption) {
      const mainText = SLIDE_4[final_slide_option].title + ': ';
      const options = Object.values(SECONDARY_OPTIONS).map(option => {
        const isSelected = option.value === selectedOption;
        return `<span class="badge badge-pill py-2 px-3 my-1 mr-2 ${isSelected ? 'badge-primary'
          : 'badge-light'}" style="font-size: 70%; background-color: ${isSelected ? 'var(--vt-burntOrange)'
          : ''}">${option.label}</span>`;
      });
      selectedOptionDiv.innerHTML =
        `<strong style="float: left; width: 215px; clear: both">${mainText}</strong><span>${options.join('')}</span>`;
    }

  };

  // Render the results page.
  const buildResult = () => {
    const res = getFinalResult();
    const recItems = res.map(
      (rec) => {
        let method = RESEARCH_METHODS[rec];

        return `<div class="card mb-3 mr-3 p-4" style="width: 100%">
      <h4 class="mb-2 text-secondary">${method.label}</h4>
      ${method.content.map(item => {
          return `<p style="font-size: 0.9em" class="mb-0"><a class="custom-link" target="_blank" href="${item.link}">${item.name}</a></p>`;
        }).join('')
        }
      </div>`;
      });

    const selectionDiv = generateSelectedOptions();

    resultDiv.innerHTML = `<div id="selectedOptionsResultsPage">${selectionDiv}</div><div class="mt-4">
      <h4 class="mb-5">UX Research Methods we are recommending:</h4>
      <div id="result-recs" style="display: flex;flex-wrap: wrap;justify-content: start;">
      ${recItems.join('')}
      </div>
      <div class="text-center row">
      <div class="col-sm-5 col-12">
      <a class="text-primary" id="SLIDE5_Update">Modify My Response <i class="fa fa-edit"></i></a>
      </div>
      <div class="col-sm-4 col-12">
      <a class="text-primary" id="SLIDE5_Retake">Start Over <i class="fa fa-sync-alt"></i></a>
      </div>
      </div>


      </div>`;

    // add event listeners to options on the results page
    const allOptions = document.querySelectorAll('button.select-opt');
    allOptions.forEach(opt => {
      opt.addEventListener('click', () => {
        const { optionval, level } = opt.dataset;

        removeOptionsAtLevel(level);
        opt.dataset.selected = 'true';

        addOrRemoveOptionAtLvl4(optionval, level);
        updateSelectedOptAtLevel(optionval, level);
      });
    });

    const addOrRemoveOptionAtLvl4 = (optionVal, level) => {
      const level4Option = document.getElementById('results-option-3');
      if (optionVal === 'validateBehaviors' || optionVal === 'assessingWhat') {
        // remove level 4 options
        if (level4Option) {
          level4Option.remove();
        }

      } else if (level !== '3' && !level4Option) {// if not remote or in-person
        const newLevel4 = document.createElement('div');
        newLevel4.setAttribute('id', 'results-option-3');
        const selectedOptionsResultsPage = document.getElementById('selectedOptionsResultsPage');
        selectedOptionsResultsPage.appendChild(newLevel4);
        document.getElementById('results-option-3').innerHTML =
          `<strong style="float: left; width: 215px; clear: both">I want to conduct: </strong><span><button data-selected="true" data-level="3" data-optionval="REMOTE" class="select-opt level-3 badge badge-pill py-2 px-3 my-1 mr-2" style="font-size: 70%;">Remote study</button><button data-selected="false" data-level="3" data-optionval="IN_PERSON" class="select-opt level-3 badge badge-pill py-2 px-3 my-1 mr-2" style="font-size: 70%;">In-person study</button></span>`;
        userSelectedOptions[3] = 'REMOTE';
        // Need to add event listeners here again
        const optionsAtLevel = document.querySelectorAll('button.select-opt.level-3');
        optionsAtLevel.forEach(opt => {
          opt.addEventListener('click', () => {
            const { optionval, level } = opt.dataset;
            removeOptionsAtLevel(level);
            opt.dataset.selected = 'true';
            updateSelectedOptAtLevel(optionval, level);

          });
        });
      }
    };

    const removeOptionsAtLevel = (level) => {
      const allTags = document.querySelectorAll(`button.select-opt.level-${level}`);
      allTags.forEach(tag => tag.dataset.selected = 'false');
    };

    const updateSelectedOptAtLevel = (newOption, levelStr) => {
      const level = parseInt(levelStr);
      console.log({ newOption, level });

      if (level === 0) { // My Users, My Service
        // select a default option choice for level 1 and 2
        generateNewOptions(newOption, level);
        generateNewOptions(userSelectedOptions[level + 1], level + 1);
        selectDefaultOptionLvl3();

      } else if (level === 1) {
        // Generate & Validate only differ in their option value, not the text and the question.
        // Need to update the level 2 options UI
        // How can we map selected option in level 1 to level 2 questions and options? --> Use SLIDE_3
        generateNewOptions(newOption, level);
        selectDefaultOptionLvl3();
      } else if (level === 2) {
        userSelectedOptions[level] = newOption;
        selectDefaultOptionLvl3();

      } else { // level 2 or 3
        // simply update the userSelectedOptions at provided level; don't change the UI
        userSelectedOptions[level] = newOption;
      }
      if (userSelectedOptions.includes('validateBehaviors') || userSelectedOptions.includes('assessingWhat')) {
        // remove selection 4
        addOrRemoveOptionAtLvl4('validateBehaviors', 2);
      } else {
        // add selection 4
        addOrRemoveOptionAtLvl4('anything', 2);

      }

      updateRecItems();
    };

    // selects the first level 3 option (e.g. REMOTE or IN-PERSON)
    const selectDefaultOptionLvl3 = () => {
      const options = document.querySelectorAll(`button.select-opt.level-3`);
      // un-highlight all the options at level 3
      // high
      options.forEach((opt, idx) => {
        if (idx === 0) {
          opt.dataset.selected = 'true';
          userSelectedOptions[3] = opt.dataset.optionval;

        } else {
          opt.dataset.selected = 'false';

        }
      });

      console.log({ userSelectedOptions });

    };

    /**
     * Generate the next question with options on the results page.
     * @param newOption: the newly selected option in the level above
     * @param level: the level above
     */
    const generateNewOptions = (newOption, level) => {
      // level = 1 --> SLIDE 3
      // level = 0 --> SLIDE 2
      const obj = level === 1 ? SLIDE_3[newOption] : SLIDE_2[newOption];
      const question = obj.title;
      const options = obj.options.map(opt => ({
        title: opt.mainText,
        value: opt.value
      }));
      const optLevel = level + 1;

      const resultsOptDiv = document.getElementById(`results-option-${optLevel}`);

      const questionDiv = `<strong style="float: left; width: 215px; clear: both">${question}: </strong>`;
      const optionsDiv = options.map((opt, index) => {
        return `<button data-selected="${index === 0 ? 'true'
          : 'false'}" data-level="${optLevel}" data-optionVal="${opt.value}" class="select-opt level-${optLevel} badge badge-pill py-2 px-3 my-1 mr-2" style="font-size: 70%;">${opt.title}</button>`;
      });

      resultsOptDiv.innerHTML = `${questionDiv}<span>${optionsDiv.join('')}</span>`;

      // Need to add event listeners here again
      const optionsAtLevel = document.querySelectorAll(`button.select-opt.level-${optLevel}`);
      optionsAtLevel.forEach(opt => {
        opt.addEventListener('click', () => {
          const { optionval, level } = opt.dataset;
          removeOptionsAtLevel(level);
          opt.dataset.selected = 'true';
          updateSelectedOptAtLevel(optionval, level);

        });
      });

      // update userSelectedOptions
      userSelectedOptions[level] = newOption;
      userSelectedOptions[optLevel] = options[0].value;

    };

    const updateRecItems = () => {
      const res = getFinalResult();
      const recItems = res.map(
        (rec) => {
          let method = RESEARCH_METHODS[rec];

          return `<div class="card mb-3 mr-3 p-4" style="width: 100%">
      <h4 class="mb-2 text-secondary">${method.label}</h4>
      ${method.content.map(item => {
            return `<p style="font-size: 0.9em" class="mb-0"><a class="custom-link" target="_blank" href="${item.link}">${item.name}</a></p>`;
          }).join('')
          }
      </div>`;
        });

      document.getElementById('result-recs').innerHTML = `${recItems.join('')}`;

    };

    document.getElementById('SLIDE5_Update').addEventListener('click', function () {
      setDisplay('selected-option-div', true);
      setVisibility('my-results', true);
      userSelectedOptions = [...userSelectedOptionsOld];

      showSlide(userSelectedOptions.length);
    });

    document.getElementById('SLIDE5_Retake').addEventListener('click', function () {
      setDisplay('selected-option-div', true);
      retakeSurvey();
    });
  };

  /**
   *  Sets the form to its initial state by clearing everything.
   */
  const retakeSurvey = () => {
    userSelectedOptions = [];
    clearSelectedOptions();
    const inputs = document.querySelectorAll('.surveyInput');
    inputs.forEach((inp) => {
      if (inp.type === 'checkbox' || inp.type === 'radio') {
        inp.checked = false;
      }
    });
    showSlide(1);

    // hide "next" buttons on each slide
    setVisibility('SLIDE1_Next', false);
    setVisibility('SLIDE2_Next', false);
    setVisibility('SLIDE3_Next', false);
    setVisibility('SLIDE4_Next', false);
  };

  /**
   * Navigate to the given slide.
   * @param n the given slide number (e.g. 1 through 5)
   */
  const showSlide = (n) => {
    const quizContainer = document.querySelector('.quiz-container');
    if (n === 5) {
      setDisplay('slide5Div', true);
      quizContainer.style.display = 'none';
    } else {
      quizContainer.style.display = 'block';
      setDisplay('slide5Div', false);
    }

    document.getElementById(`slide${currentSlide}Div`).classList.remove('active-slide');
    document.getElementById(`slide${n}Div`).classList.add('active-slide');
    currentSlide = n;
  };

  /**
   * Navigate to the next slide.
   */
  const showNextSlide = () => {
    if (currentSlide !== 4) {
      setDisplay(`selected-option-${currentSlide + 1}`, true);
      document.getElementById(`selected-option-${currentSlide + 1}`).innerHTML = '';
    }

    showSlide(currentSlide + 1);
  };

  /**
   * Navigate to the previous slide.
   */
  const showPreviousSlide = () => {
    const inputs = document.getElementsByName(`SLIDE_${currentSlide}`);
    userSelectedOptions.splice(currentSlide - 1, 1);
    inputs.forEach((inp) => {
      if (inp.type === 'checkbox' || inp.type === 'radio') {
        inp.checked = false;
      }
    });

    setDisplay(`selected-option-${currentSlide}`, false);
    if (currentSlide !== 4) {
      setVisibility(`SLIDE${currentSlide}_Next`, false);
    }
    document.getElementById(`selected-option-${currentSlide}`).innerHTML = '';

    showSlide(currentSlide - 1);
  };

  // Variables
  const slide1Div = document.getElementById('slide1Div');
  const slide2Div = document.getElementById('slide2Div');
  const slide3Div = document.getElementById('slide3Div');
  const slide4Div = document.getElementById('slide4Div');
  const resultDiv = document.getElementById('slide5Div');

  const startOver = document.getElementById('start-over');
  startOver.addEventListener('click', () => {
    setDisplay('selected-option-div', false);
    retakeSurvey();
  });

  // Kick things off
  buildSlide1();

  // Pagination
  let currentSlide = 1;

  // Show the first slide
  showSlide(currentSlide);
}

uxResearchToolRender();