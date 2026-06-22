import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { WaitListForm } from './waitlistForm';

export default function Waitlist() {
  // TODO: Adjust tailwind theme and add right colors and text sizes instead of using the raw values

  return (
    <div className="h-screen w-screen flex items-center flex-col pt-32">
      <Badge
        variant="large"
        className="bg-[#E8E0EA] mb-8 h-10 border border-[#c8b8f866]"
      >
        <span className="text-[#5A4880] text-[0.9rem] uppercase font-bold">
          Early access — limited spots
        </span>
      </Badge>

      <h1 className="font-heading text-5xl font-bold text-center mb-8">
        The mental health companion <br />
        <i> you will actually use. </i>
      </h1>

      {/* TODO: Add right ddescription */}

      <p className="text-[#7a6e60] text-[1.2rem] text-center mb-8">
        Mentally helps you track your mood, complete evidence-based assessments,{' '}
        <br /> and stay connected with your therapist <br /> all in one calm,
        private space.
      </p>

      <div className="mb-8">
        <Image src="/thisone.png" alt="capybarra" width={320} height={320} />
      </div>

      <WaitListForm />
    </div>
  );
}
