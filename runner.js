var sendmail = require('sendmail')(),
    schedule = require('node-schedule'),
    rule = new schedule.RecurrenceRule(),
    emailer = {};


rule.minute = 59;


emailer = schedule.scheduleJob(rule, function() {
    sendmail({
        from: 'Justin.Wehrman@RedFuse.com',
        to: 'Matt.Brown@RedFuse.com',
        subject: '',
        content: '',
      }, function(err, reply) {
        console.log(err && err.stack);
        console.dir(reply);
    });
});
