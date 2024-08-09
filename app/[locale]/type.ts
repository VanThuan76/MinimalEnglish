export interface Data {
  infomation: {
    hotline : string;
    message: string;
    email: string;
  };
  home: HomeData;
  about_us: About_us;
}

export interface HomeData {
  banner: banner;
  about_us: About;
  outstanding_class: Outstanding_class;
  testimonial: Testimonial;
  why_us: Why_us;
  videoId: string;
}
    export interface Why_us{
      label: string;
      title: string;
      image: string;
      info_why_us: Info_why_us[];
    }
    export interface Testimonial{
      label: string;
      title: string;
      info_testimonials: Info_testimonials[];
    };
    export interface Outstanding_class{
      label: string;
      title: string;
      info_classes: InfoClass[];
    };
    export interface banner {
      title: string;
      slogan: string;
      image: {
        image_1: string,
        image_2: string,
        image_3: string,
        image_4: string,
        image_5: string,
        image_6: string,
        image_7: string,
      };
      content: string;
    };
    export interface About{
      label: string;
      title: [string, string];
      image: {
        image_1: string;
        image_2: string;
      };
      content: string;
    };    

  export interface Library {
    writing: [],
    speaking: {},
    reading: {},
    listening: {},
    vocabulary: {},
    pronunciation: {},
    paraphrases: {},
    selfstudy: {},
  }
  export interface News_blog {
    tips: {},
    ieltsNews: IeltsNews[],
    minimalNews: {},
    faq: {},
  }
  export interface HomeData {
    banner: banner;
    about_us: About;
    outstanding_class: Outstanding_class;
    testimonial: Testimonial;
    why_us: Why_us;
    videoId: string;
  }
      export interface Why_us{
        label: string;
        title: string;
        image: string;
        info_why_us: Info_why_us[];
      }
      export interface Testimonial{
        label: string;
        title: string;
        info_testimonials: Info_testimonials[];
      };
      export interface Outstanding_class{
        label: string;
        title: string;
        info_classes: InfoClass[];
      };
      export interface banner {
        title: string;
        slogan: string;
        image: {
          image_1: string,
          image_2: string,
          image_3: string,
          image_4: string,
          image_5: string,
          image_6: string,
          image_7: string,
        };
        content: string;
      };
      export interface About{
        label: string;
        title: [string, string];
        image: {
          image_1: string;
          image_2: string;
        };
        content: string;
      };

    export interface InfoClass {
      name: string;
      description: string;
      image: string;
      isComing: boolean
    }

    export interface Info_testimonials{
      name: string;
      address : string;
      content : string;
      image: string;
    }

    export interface Info_why_us{
      title: string;
      content: string;
    }

export interface About_us{
  mission: Mission;
  vision: vision;
  brand_story: Brand_story;
  highlights: Highlights;
  lectures: lectures;
}
export interface lectures{
  label: string;
  description: string;
  detail_lectures:Detail_lectures[];
}
export interface Highlights{
  label: string;
  description: string;
  lecturers: {
    title: string;
    content: Content[]
  }
  teaching_methods: {
    title: string;
    content: Content[]
  }
}
  export interface Brand_story{
    label: string;
    description: string;
    detail_stories: Detail_story[]
  };
  export interface vision{
    label: string;
    image: string;
    content: string
  };
  export interface Mission{
    label: string;
    image: string;
    content: string;
  };
  export interface Detail_story{
    year: string;
    content: string;
  };
  export interface Detail_lectures{
    year: string;
    username: string;
    content: string[];
    image: string;
  }

    type Content = string;

    export interface IeltsNews {
      tag: string,
      image: string,
      publishInfor: string,
      title: string,
      description: string
    }
    export interface writing {
      title: string,
      image: string,
      view: string,      
      time: string,
      link: string
    }