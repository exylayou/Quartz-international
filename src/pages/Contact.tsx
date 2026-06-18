import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Send, CheckCircle, UploadCloud, File, X } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; size: string; progress: number; status: 'uploading' | 'done' }[]>([]);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      const newFiles = filesArray.map(file => {
        const sizeInMb = (file.size / (1024 * 1024)).toFixed(1);
        const formattedSize = parseFloat(sizeInMb) > 0.1 ? `${sizeInMb} MB` : `${(file.size / 1024).toFixed(0)} KB`;
        
        return {
          name: file.name,
          size: formattedSize,
          progress: 0,
          status: 'uploading' as const
        };
      });

      setUploadedFiles(prev => [...prev, ...newFiles]);

      newFiles.forEach((file) => {
        let currentProgress = 0;
        const interval = setInterval(() => {
          currentProgress += Math.floor(Math.random() * 20) + 15;
          if (currentProgress >= 100) {
            currentProgress = 100;
            clearInterval(interval);
            setUploadedFiles(prev => prev.map(f => f.name === file.name ? { ...f, progress: 100, status: 'done' } : f));
          } else {
            setUploadedFiles(prev => prev.map(f => f.name === file.name ? { ...f, progress: currentProgress } : f));
          }
        }, 80);
      });
    }
  };

  const removeFile = (fileName: string) => {
    setUploadedFiles(prev => prev.filter(f => f.name !== fileName));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          notes,
          layout: 'Contact Form',
          files: uploadedFiles.map(f => ({ name: f.name, size: f.size }))
        }),
      });

      if (response.ok) {
        setStatus('success');
        setName('');
        setPhone('');
        setEmail('');
        setNotes('');
        setUploadedFiles([]);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-background pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Phone size={14} />
              Get In Touch
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-text-primary uppercase">Contact Our Team</h1>
            <p className="text-xl text-text-muted leading-relaxed mb-12">
              Ready to start your kitchen transformation? Whether you have a question about pricing, want to schedule a visit, or need to upload your project files, we are here to help.
            </p>

            <div className="space-y-10">
              <div className="flex items-center gap-6">
                <div className="bg-white p-4 rounded-full shadow-sm">
                  <Phone size={24} className="text-accent" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] mb-1">Call Us Directly</p>
                  <p className="text-xl font-bold text-text-primary">(647) 370-6938</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-white p-4 rounded-full shadow-sm">
                  <Mail size={24} className="text-accent" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] mb-1">Email Our Specialists</p>
                  <p className="text-xl font-bold text-text-primary">info@quartzinternational.ca</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-10 md:p-16 bg-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-10">Book a Consultation</h3>
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 flex flex-col items-center gap-4"
              >
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-2">
                  <CheckCircle size={36} />
                </div>
                <h4 className="text-xl font-bold">Message Sent!</h4>
                <p className="text-text-muted text-sm max-w-sm">
                  Thank you for reaching out. A Quartz International specialist will review your inquiry and contact you shortly.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm font-bold text-accent hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Full Name</label>
                    <input 
                      type="text" 
                      className="input-field" 
                      placeholder="John Doe" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Phone Number</label>
                    <input 
                      type="tel" 
                      className="input-field" 
                      placeholder="(647) 555-0000" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Email Address</label>
                  <input 
                    type="email" 
                    className="input-field" 
                    placeholder="john@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted block">Upload Documents / Images</label>
                  
                  <input 
                    type="file" 
                    multiple 
                    id="contact-file-upload" 
                    className="hidden" 
                    onChange={handleFileChange}
                  />

                  <label 
                    htmlFor="contact-file-upload" 
                    className="block border-2 border-dashed border-[#C6A87D]/50 hover:border-[#C6A87D] bg-[#FAF8F5] rounded-2xl p-8 text-center cursor-pointer transition-colors"
                  >
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center text-accent">
                        <UploadCloud size={24} />
                      </div>
                      <p className="text-sm font-bold text-text-primary">Drag & Drop files here</p>
                      <p className="text-xs text-text-muted">or <span className="text-accent underline font-semibold">browse files</span> from your device</p>
                      <p className="text-[10px] text-gray-400 font-medium italic">Supports sketches, measurements, photos, drawings</p>
                    </div>
                  </label>

                  {uploadedFiles.length > 0 && (
                    <div className="space-y-2 mt-4">
                      {uploadedFiles.map((file) => (
                        <div key={file.name} className="flex items-center justify-between p-3.5 bg-white border border-border-custom rounded-xl shadow-sm animate-in fade-in duration-300">
                          <div className="flex items-center gap-3 flex-grow max-w-[80%]">
                            <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                              <File size={16} />
                            </div>
                            <div className="space-y-1 w-full">
                              <p className="text-xs font-bold text-text-primary truncate">{file.name}</p>
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] text-text-muted font-bold">{file.size}</span>
                                {file.status === 'uploading' && (
                                  <div className="w-24 bg-gray-200 h-1.5 rounded-full overflow-hidden">
                                    <div className="bg-accent h-full transition-all duration-300" style={{ width: `${file.progress}%` }}></div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          
                          <button 
                            type="button" 
                            onClick={() => removeFile(file.name)} 
                            className="p-1 hover:bg-red-50 hover:text-red-500 text-gray-400 rounded-full transition-colors"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted">How can we help?</label>
                  <textarea 
                    className="input-field min-h-[150px] pt-4" 
                    placeholder="Briefly describe your project..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    required
                  ></textarea>
                </div>
                {status === 'error' && (
                  <p className="text-red-500 text-xs font-bold text-center">
                    Failed to send message. Please try again.
                  </p>
                )}
                <button 
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full h-16 text-lg group disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Sending Message...' : 'Send My Message'}
                  {status !== 'submitting' && (
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
