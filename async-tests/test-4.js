
/*
 * Output: 
 *  bbb
 *  aaa
 * Reason: Promise are resolved in the micro queue, it has more priority and is executed first than the functions is the 
 * External API such as setTimeout than waiting in the task queue. So, while setTimout is waiting in the task queue,
 * the promise is waiting in the micro queue,  on the next tick the event loop firsts gets the tasks in the
 * micro queue and then after gets the taks in the task queue, that's why we first see bbb and then after aaa. 
 */
setTimeout(() => console.log('aaaa'), 0);
new Promise(resolve => resolve(('bbbb'))).then((value) => console.log(value));