import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req, res) {
    if (req.method === "POST") {
      const { title, titleLink, userId } =
        typeof req.body == "string" ? JSON.parse(req.body) : req.body;
  
      try {
        // we can access db records with prisma functions
        const wish = await prisma.wishlist.create({
          data: {
            title,
            link: titleLink,
            userId: parseInt(userId),
          },
        });
        res.status(200).json({ wish });
      } catch (e) {
        res.status(500).json(e);
      }
    }
  }

  export default async function handler(req, res) {
    if (req.method === "GET") {
      const { user } = req.query;
  
      try {
        const list = await prisma.wishlist.findMany({
          where: {
            userId: parseInt(user),
          },
          orderBy: {
            createdAt: "desc",
          },
        });
        res.status(200).json({ list });
      } catch (e) {
        res.status(500).json(e);
      }
    }
  }

  export default async function handler(req, res) {
    if (req.method === "POST") {
      const { wishId, title, link } = JSON.parse(req.body);
  
      try {
        const updatedWish = await prisma.wishlist.update({
          where: {
            id: wishId,
          },
          data: {
            title,
            link,
          },
        });
        res.status(200).json({ updatedWish });
      } catch (e) {
        res.status(500).json(e);
      }
    }
  }

  export default async function handler(req, res) {
    if (req.method === "POST") {
      const { wishId } = JSON.parse(req.body);
  
      try {
        await prisma.wishlist.delete({
          where: {
            id: wishId,
          },
        });
        res.status(200).json({ message: "deleted" });
      } catch (e) {
        res.status(500).json(e);
      }
    }
  }