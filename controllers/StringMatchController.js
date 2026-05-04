class StringMatchController {
    
    static renderDashboard(req, res) {
        res.render('index', { username: req.session.username });
    }

    static calculateMatch(req, res) {
        const { input1, input2, type } = req.body;
        
        let target1 = input1;
        let target2 = input2;

        if (type === 'non-sensitive') {
            target1 = target1.toLowerCase();
            target2 = target2.toLowerCase();
        }

        let matchCount = 0;
        
        for (let i = 0; i < target1.length; i++) {
            if (target2.includes(target1[i])) {
                matchCount++;
            }
        }

        const percentage = (matchCount / input1.length) * 100;

        res.render('index', {
            username: req.session.username,
            input1,
            input2,
            type,
            matchCount,
            totalCharacters: input1.length,
            percentageResult: `${percentage}%`
        });
    }
}

module.exports = StringMatchController;