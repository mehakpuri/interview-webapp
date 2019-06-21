
export default {
    state: {
        pageId: 'Personal',
        allPages: { '1':'Personal','2':'Profile','3':'Expertise','4':'Interview'},
        jobCount: 1,
        schoolCount: 1,
        expertise_display: 1
    },
    getters: {
        getPageId: (state) => state.pageId,
        getAllPages: (state) => state.allPages,
        getJobCount: (state) => state.jobCount,
        getSchoolCount: (state) => state.schoolCount,
        getExpertiseDisplay: (state) => state.expertise_display
    },
    mutations: {
        SET_PAGE_ID: (state,label) => {
            state.pageId = label
        },
        INCREMENT_JOB_COUNT: (state) => {
            state.jobCount ++
        },
        INCREMENT_SCHOOL_COUNT: (state) => {
            state.schoolCount ++
        },
        SET_JOB_COUNT: (state, result) => {
            state.jobCount  = result
        },
        SET_SCHOOL_COUNT: (state, result) => {
            state.schoolCount = result
        },
        SET_EXPERTISE_DISPLAY: (state, result) => {
            state.expertise_display = result
        }
    },
    actions: {
        changeActiveButton: (context, label) => {
            context.commit('SET_PAGE_ID', label)
        },
        increaseJobCount: (context) => {
            context.commit('INCREMENT_JOB_COUNT')
        },
        increaseSchoolCount: (context) => {
            context.commit('INCREMENT_SCHOOL_COUNT')
        },
        changeJobCount: (context, result) => {
            context.commit('SET_JOB_COUNT', result)
        },
        changeSchoolCount: (context, result) => {
            context.commit('SET_SCHOOL_COUNT', result)
        },
        setDisplay: (context, result) => {
            context.commit('SET_EXPERTISE_DISPLAY', result)
        }
    }
}