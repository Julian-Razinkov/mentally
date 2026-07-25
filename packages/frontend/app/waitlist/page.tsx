import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { WaitListForm } from './waitlistForm';

export default function Waitlist() {
  return (
    <div className="h-screen w-screen relative bg-[url('/1.png')] bg-cover bg-center ">
      <div className="relative z-10 flex items-center flex-col pt-32">
        <Badge
          variant="default"
          size="medium"
          className="bg-accent/30 mb-8 h-10 border border-accent"
        >
          <span className="text-primary uppercase font-bold">Early access</span>
        </Badge>

        <h1 className="font-heading text-6xl font-bold text-center mb-8 text-primary">
          The mental health companion <br />
          <i> you will actually use. </i>
        </h1>

        <p className="text-body-foreground text-[1.2rem] text-center mb-8">
          Mentally helps you track your mood, complete evidence-based
          assessments, <br /> and stay connected with your therapist - all in
          one calm, <br />
          private space.
        </p>

        <WaitListForm />
      </div>
    </div>
  );
}
