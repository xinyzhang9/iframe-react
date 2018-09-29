export function getStepInformation(){
    return {
        'Welcome':{'step':'0','desc':'Welcome to ITOM Suite','child':null},
        'Suite':{'step':'1','desc':'Suite configuration','child':{
            'Database':{'step':'1-0','desc':'Database configuration','child':null},
            'Connection':{'step':'1-1','desc':'Connection configuration','child':{
                'Server Connection':{'step':'1-1-0','desc':'Server Connection configuration','child':null},
                'Browser Connection':{'step':'1-1-1','desc':'Browser Connection configuration','child':null},
            }},
            'Login':{'step':'1-2','desc':'Login configuration','child':null},
        },   
        },
        'Summary':{'step':'2','desc':'Summary of configuration','child':null},
    }
}

export function getAllSteps(){
    return 8;
}

export function getStepsMap(){
    return {0:'0',1:'1',2:'1-0',3:'1-1',4:'1-1-0',5:'1-1-1',6:'1-2',7:'2'};
}
