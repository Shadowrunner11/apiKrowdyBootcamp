import { Router } from 'restify-router';
import ProfileController from '../controller/profile.controller';


const router = new Router();

router.post('/profiles', (req, res)=>{
  const { urlsCandidates } = req.body;
  ProfileController.createProfiles(urlsCandidates);
  res.json({ succes: true });
});

export default router;