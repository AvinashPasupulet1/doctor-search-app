import { Request, Response } from 'express';
import doctors from '../data/doctors.json';

export const getDoctors = (req: Request, res: Response) => {
  const { location, specialty } = req.query;
  const filtered = doctors.filter(
    (doc) =>
      doc.location.toLowerCase().includes((location as string).toLowerCase()) &&
      doc.specialty.toLowerCase().includes((specialty as string).toLowerCase())
  );
  res.json(filtered);
};
