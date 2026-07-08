import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy } from '@angular/core';
import { LanguageService } from '../shared/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnDestroy {
  protected activeContactDialog: 'email' | 'phone' | undefined;
  protected copiedContact: 'email' | 'phone' | undefined;
  protected readonly emailAddress = 'jetzt@glück-selbermachen.de';
  protected readonly phoneNumber = '0174 / 384 67 42';
  private readonly phoneHref = 'tel:+491743846742';
  private copyConfirmationTimeout: ReturnType<typeof setTimeout> | undefined;

  constructor(
    public language: LanguageService,
    @Inject(DOCUMENT) private readonly document: Document
  ) { }

  ngOnDestroy(): void {
    this.clearCopyConfirmationTimeout();
    this.unlockPage();
  }

  protected openEmailDialog(): void {
    this.openContactDialog('email');
  }

  protected openPhoneDialog(): void {
    this.openContactDialog('phone');
  }

  protected openContactDialog(contactType: 'email' | 'phone'): void {
    this.activeContactDialog = contactType;
    this.copiedContact = undefined;
    this.lockPage();
  }

  protected closeContactDialog(): void {
    this.activeContactDialog = undefined;
    this.copiedContact = undefined;
    this.clearCopyConfirmationTimeout();
    this.unlockPage();
  }

  protected openEmailClient(): void {
    window.location.href = `mailto:${this.emailAddress}`;
    this.closeContactDialog();
  }

  protected callPhoneNumber(): void {
    window.location.href = this.phoneHref;
    this.closeContactDialog();
  }

  protected async copyEmailAddress(): Promise<void> {
    await navigator.clipboard.writeText(this.emailAddress);
    this.showCopyConfirmation('email');
  }

  protected async copyPhoneNumber(): Promise<void> {
    await navigator.clipboard.writeText(this.phoneNumber);
    this.showCopyConfirmation('phone');
  }

  private showCopyConfirmation(contactType: 'email' | 'phone'): void {
    this.copiedContact = contactType;
    this.clearCopyConfirmationTimeout();
    this.copyConfirmationTimeout = setTimeout(() => {
      this.closeContactDialog();
    }, 1500);
  }

  private lockPage(): void {
    this.document.documentElement.classList.add('email-dialog-open');
    this.document.body.classList.add('email-dialog-open');
  }

  private unlockPage(): void {
    this.document.documentElement.classList.remove('email-dialog-open');
    this.document.body.classList.remove('email-dialog-open');
  }

  private clearCopyConfirmationTimeout(): void {
    if (this.copyConfirmationTimeout) {
      clearTimeout(this.copyConfirmationTimeout);
      this.copyConfirmationTimeout = undefined;
    }
  }
}
