export default function handler(req, res) {
  res.status(200).json({ cmsUrl: process.env.CMS_URL, dockerUser: process.env.DOCKER_USER_NAME });
}
