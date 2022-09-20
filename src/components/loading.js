import Image from 'next/image';

export default function Loading() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image src="/loading.gif" alt="me" width="700" height="500" />
    </div>
  );
}
